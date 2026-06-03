/*
  UNO + ESP-01S (AT) + ADXL345 + HX711 + 2 switches
  Envío cada 1 s a ThingsBoard (HTTP).
  - temperature: aleatoria
  - RPM: aleatoria
  - peso_kg: desde HX711 (0 si no calibrado)
  - x, y, z: ejes del acelerómetro en "g"
  - pitch_deg, roll_deg: ángulos en grados
  - cinturon, asiento: booleanos

  Ojo: el ESP-01 usa Serial (pines 0/1). No abras el Monitor Serie con el ESP conectado.
*/

#define WIFI_SSID   "V50"
#define WIFI_PASS   "1234567890"
#define TB_HOST     "eu.thingsboard.cloud"
#define TB_PORT     80
#define TB_TOKEN    "jev8p8hlonbn5v95zbxp"
#define SEND_MS     1000UL

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>
#include <HX711.h>
#include <EEPROM.h>
#include <math.h>

/* --- ADXL345 (I2C: SDA=A4, SCL=A5) --- */
Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

/* --- HX711 (DT=D3, SCK=D2) --- */
#define LOADCELL_DOUT_PIN 3
#define LOADCELL_SCK_PIN  2
const float MAX_WEIGHT_G = 20000.0f;   // ajusta al rango de tu celda
struct CalData { uint32_t magic; float scale; };
const uint32_t CAL_MAGIC = 0xC0FFEE01;
const int EEPROM_ADDR = 0;
HX711 balanza;
float scaleFactor = 0.0f;   // 0 = sin calibración, reporta 0 kg

/* --- Switches con pull-up interno --- */
const int pinCinturon = 4;  // a GND
const int pinAsiento  = 5;  // a GND

/* --- Utilidades --- */
bool loadCalibration() {
  CalData d; EEPROM.get(EEPROM_ADDR, d);
  if (d.magic == CAL_MAGIC && isfinite(d.scale) && d.scale > 0) { scaleFactor = d.scale; return true; }
  return false;
}

/* --- ESP-01 AT helpers (usa Serial HW) --- */
void clearIn(unsigned long ms=10){ unsigned long t=millis(); while(Serial.available() && (millis()-t<ms)) (void)Serial.read(); }
bool waitFor(const char* token, unsigned long timeout) {
  size_t n=strlen(token), k=0; unsigned long t0=millis();
  while (millis()-t0 < timeout) {
    if (Serial.available()) {
      char c=(char)Serial.read();
      if (c==token[k]) { if(++k==n) return true; } else k=(c==token[0])?1:0;
    }
  }
  return false;
}
bool sendAT(const char* cmd, const char* expect, unsigned long timeout) {
  Serial.print(cmd); Serial.print("\r\n");
  return waitFor(expect, timeout);
}
bool wifiConnect(const char* ssid, const char* pass) {
  if (!sendAT("AT", "OK", 1000)) return false;
  sendAT("ATE0", "OK", 1000);
  sendAT("AT+CWMODE=1", "OK", 1000);
  sendAT("AT+CIPMUX=0", "OK", 1000);
  sendAT("AT+CIPSHUT", "OK", 2000); // según firmware puede ignorarse

  clearIn();
  Serial.print("AT+CWJAP=\""); Serial.print(ssid); Serial.print("\",\"");
  Serial.print(pass); Serial.print("\"\r\n");
  if (!waitFor("WIFI CONNECTED", 15000)) {
    if (!waitFor("OK", 15000)) return false;
  }
  sendAT("AT+CIFSR", "OK", 2000);
  return true;
}
bool httpPostTB(const char* host, int port, const char* token, const char* json, size_t jsonLen) {
  Serial.print("AT+CIPSTART=\"TCP\",\""); Serial.print(host); Serial.print("\","); Serial.print(port); Serial.print("\r\n");
  if (!waitFor("CONNECT", 5000)) return false;

  char header[220];
  int hlen = snprintf(header, sizeof(header),
    "POST /api/v1/%s/telemetry HTTP/1.1\r\n"
    "Host: %s\r\n"
    "Connection: close\r\n"
    "Content-Type: application/json\r\n"
    "Content-Length: %u\r\n\r\n",
    token, host, (unsigned)jsonLen);
  if (hlen <= 0 || (size_t)hlen >= sizeof(header)) return false;

  unsigned totalLen = hlen + jsonLen;
  Serial.print("AT+CIPSEND="); Serial.print(totalLen); Serial.print("\r\n");
  if (!waitFor(">", 3000)) { sendAT("AT+CIPCLOSE", "OK", 1000); return false; }

  Serial.write((const uint8_t*)header, hlen);
  Serial.write((const uint8_t*)json, jsonLen);

  bool ok = waitFor("SEND OK", 5000);
  waitFor("CLOSED", 5000);
  return ok;
}

void setup() {
  // Serial ocupado por ESP-01
  Serial.begin(115200);
  delay(200);

  // Semilla para aleatorios
  randomSeed(analogRead(A1) ^ micros());

  // Acelerómetro
  accel.begin();
  accel.setRange(ADXL345_RANGE_2_G);

  // HX711
  balanza.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  if (loadCalibration()) balanza.set_scale(scaleFactor);
  delay(500);
  balanza.tare(25);

  // Switches
  pinMode(pinCinturon, INPUT_PULLUP);
  pinMode(pinAsiento,  INPUT_PULLUP);

  // WiFi
  wifiConnect(WIFI_SSID, WIFI_PASS);
}

void loop() {
  static unsigned long lastSend = 0;
  unsigned long now = millis();

  // HX711 -> kg
  float gramos = 0.0f;
  if (scaleFactor > 0.0f) gramos = balanza.get_units(10);
  if (gramos < 0) gramos = 0;
  if (gramos > MAX_WEIGHT_G) gramos = MAX_WEIGHT_G;
  float peso_kg = gramos / 1000.0f;

  // ADXL345 -> ejes en g
  sensors_event_t e; accel.getEvent(&e);
  const float G0 = 9.80665f;
  float x = e.acceleration.x / G0;
  float y = e.acceleration.y / G0;
  float z = e.acceleration.z / G0;

  // Ángulos en grados
  float pitch_deg = atan2f(-x, sqrtf(y*y + z*z)) * 180.0f / PI;
  float roll_deg  = atan2f( y, z) * 180.0f / PI;

  // Switches (LOW = activado)
  bool cinturon = (digitalRead(pinCinturon) == LOW);
  bool asiento  = (digitalRead(pinAsiento)  == LOW);

  if (now - lastSend >= SEND_MS) {
    lastSend = now;

    // Aleatorios: temperature (20.0..35.0) y RPM (0..6000)
    float temperature = random(200, 351) / 10.0f;
    int   rpm         = random(0, 6001);

    // JSON -> añade pitch_deg y roll_deg
    // Keys: temperature, RPM, peso_kg, x, y, z, pitch_deg, roll_deg, cinturon, asiento
    char json[260];
    int n = snprintf(json, sizeof(json),
      "{\"temperature\":%.1f,"
       "\"RPM\":%d,"
       "\"peso_kg\":%.3f,"
       "\"x\":%.3f,"
       "\"y\":%.3f,"
       "\"z\":%.3f,"
       "\"pitch_deg\":%.1f,"
       "\"roll_deg\":%.1f,"
       "\"cinturon\":%s,"
       "\"asiento\":%s}",
      temperature, rpm, peso_kg, x, y, z, pitch_deg, roll_deg,
      cinturon ? "true" : "false",
      asiento  ? "true" : "false"
    );
    if (n > 0 && (size_t)n < sizeof(json)) {
      (void)httpPostTB(TB_HOST, TB_PORT, TB_TOKEN, json, (size_t)n);
    }
  }

  delay(50);
}
