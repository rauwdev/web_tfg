/*
========================================
CABLEADO / CONEXIONES
========================================

1) ACELERÓMETRO ADXL345 (I2C)
   - VCC  -> 5V (o 3.3V si tu módulo lo exige)
   - GND  -> GND
   - SDA  -> A4 (I2C SDA en Arduino UNO)
   - SCL  -> A5 (I2C SCL en Arduino UNO)

2) PEDAL / FRENO (sensor analógico)
   - Señal (verde) -> A0
   - +5V (rojo)   -> 5V
   - GND (amarillo)   -> GND

3) MÓDULO HX711 (báscula)
   - VCC  -> 5V
   - GND  -> GND
   - DT / DOUT -> pin digital 3
   - SCK       -> pin digital 2

4) SWITCHES 
   - Pin 4 -> switch "cinturon" -> GND
   - Pin 5 -> switch "asiento"  -> GND
   (sin resistencias externas)

Todo a GND común.
Serial: 115200
========================================
*/

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>
#include <math.h>
#include <HX711.h>
#include <EEPROM.h>

/* ----- ACELERÓMETRO ----- */
Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

/* ----- PEDAL ----- */
const int pedalPin = A0;
const int RAW_MIN = 165;
const int RAW_MAX = 868;
const float ALPHA = 0.2;
float porcentajeFiltrado = 0.0f;

/* ----- HX711 ----- */
#define LOADCELL_DOUT_PIN 3
#define LOADCELL_SCK_PIN  2

const float MAX_WEIGHT_G = 20000.0f;
const float SAFE_LIMIT_G = 0.98f * MAX_WEIGHT_G;

/* guardado de calibración */
struct CalData {
  uint32_t magic;
  float scale;
};
const uint32_t CAL_MAGIC = 0xC0FFEE01;
const int EEPROM_ADDR = 0;

HX711 balanza;
float scaleFactor = 0.0f;

/* ----- SWITCHES ----- */
const int switchPin4 = 4;   // cinturon
const int switchPin5 = 5;   // asiento

/* ----- PROTOTIPOS ----- */
float rawToPercent(int raw);
float readFloatFromSerial();
bool loadCalibration();
void saveCalibration(float scale);
void imprimirAyuda();
void calibrar();

void setup() {
  Serial.begin(115200);
  delay(200);

  // ADXL345 en I2C
  if (!accel.begin()) {
    Serial.println("No se detecta ADXL345. Revisa SDA=A4 y SCL=A5.");
    while (1) { delay(10); }
  }
  accel.setRange(ADXL345_RANGE_2_G);
  Serial.println("ADXL345 listo.");

  // pedal
  int raw = analogRead(pedalPin);
  porcentajeFiltrado = rawToPercent(raw);
  Serial.println("Pedal en A0 listo.");

  // HX711
  balanza.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  if (loadCalibration()) {
    Serial.print(F("Factor de escala cargado: "));
    Serial.println(scaleFactor, 6);
    balanza.set_scale(scaleFactor);
  } else {
    Serial.println(F("Sin calibracion previa para HX711. Usa 'c'."));
  }
  Serial.println(F("Tare inicial HX711..."));
  delay(800);
  balanza.tare(25);
  Serial.println(F("Cero HX711 OK."));

  Serial.println(F("Comandos: c=calibrar, t=tare, r=ver factor, h=ayuda"));

  // switches con pull-up interno
  pinMode(switchPin4, INPUT_PULLUP);  // cinturon
  pinMode(switchPin5, INPUT_PULLUP);  // asiento
}

void loop() {
  /* ----- pedal ----- */
  int raw = analogRead(pedalPin);
  float porcentaje = rawToPercent(raw);
  porcentajeFiltrado = ALPHA * porcentaje + (1.0f - ALPHA) * porcentajeFiltrado;

  /* ----- acelerómetro ----- */
  sensors_event_t event;
  accel.getEvent(&event);
  const float G0 = 9.80665f;
  float xg = event.acceleration.x / G0;
  float yg = event.acceleration.y / G0;
  float zg = event.acceleration.z / G0;
  float pitch = atan2f(-xg, sqrtf(yg * yg + zg * zg)) * 180.0f / PI;
  float roll  = atan2f( yg, zg) * 180.0f / PI;

  /* ----- HX711 ----- */
  float gramos = 0.0f;
  if (scaleFactor > 0.0f) {
    gramos = balanza.get_units(10);
  } else {
    balanza.read_average(5);
    gramos = 0.0f;
  }
  if (gramos < 0) gramos = 0;
  if (gramos > MAX_WEIGHT_G) gramos = MAX_WEIGHT_G;

  /* ----- switches ----- */
  int sw4 = digitalRead(switchPin4);   // LOW = pulsado
  int sw5 = digitalRead(switchPin5);
  const char* cinturonTxt = (sw4 == LOW) ? "si" : "no";
  const char* asientoTxt  = (sw5 == LOW) ? "si" : "no";

  /* ----- salida ----- */
  Serial.print("RAW=");
  Serial.print(raw);
  Serial.print("  pct=");
  Serial.print(porcentaje, 1);
  Serial.print("  pct_filtrado=");
  Serial.print(porcentajeFiltrado, 1);
  Serial.print("  x[g]=");
  Serial.print(xg, 2);
  Serial.print("  y[g]=");
  Serial.print(yg, 2);
  Serial.print("  z[g]=");
  Serial.print(zg, 2);
  Serial.print("  pitch=");
  Serial.print(pitch, 1);
  Serial.print("  roll=");
  Serial.print(roll, 1);
  Serial.print("  peso_g=");
  Serial.print(gramos, 2);
  Serial.print("  peso_kg=");
  Serial.print(gramos / 1000.0f, 3);
  Serial.print("  cinturon=");
  Serial.print(cinturonTxt);
  Serial.print("  asiento=");
  Serial.println(asientoTxt);

  /* ----- comandos HX711 ----- */
  if (Serial.available()) {
    char cmd = (char)Serial.read();
    switch (cmd) {
      case 'c':
      case 'C':
        calibrar();
        break;
      case 't':
      case 'T':
        Serial.println(F("Tare HX711..."));
        balanza.tare(20);
        Serial.println(F("OK."));
        break;
      case 'r':
      case 'R':
        Serial.print(F("scaleFactor actual: "));
        Serial.println(scaleFactor, 6);
        break;
      case 'h':
      case 'H':
        imprimirAyuda();
        break;
      default:
        break;
    }
  }

  delay(100);
}

/* ===== FUNCIONES ===== */

float rawToPercent(int raw) {
  int r = constrain(raw, RAW_MIN, RAW_MAX);
  float pct = ((float)(r - RAW_MIN) * 100.0f) / (float)(RAW_MAX - RAW_MIN);
  if (pct < 0) pct = 0;
  if (pct > 100) pct = 100;
  return pct;
}

float readFloatFromSerial() {
  while (!Serial.available()) { }
  String s = Serial.readStringUntil('\n');
  s.trim();
  s.replace(',', '.');
  return s.toFloat();
}

bool loadCalibration() {
  CalData data;
  EEPROM.get(EEPROM_ADDR, data);
  if (data.magic == CAL_MAGIC && isfinite(data.scale) && data.scale > 0.0f) {
    scaleFactor = data.scale;
    return true;
  }
  return false;
}

void saveCalibration(float scale) {
  CalData data;
  data.magic = CAL_MAGIC;
  data.scale = scale;
  EEPROM.put(EEPROM_ADDR, data);
}

void imprimirAyuda() {
  Serial.println(F("\nComandos HX711:"));
  Serial.println(F("  c  -> Calibrar con peso conocido"));
  Serial.println(F("  t  -> Tare / poner a cero"));
  Serial.println(F("  r  -> Mostrar factor de escala actual"));
  Serial.println(F("  h  -> Esta ayuda"));
  Serial.println();
}

void calibrar() {
  Serial.println(F("\n=== Calibracion HX711 ==="));
  Serial.println(F("1) Quita todo el peso y pulsa Enter."));
  while (Serial.available()) Serial.read();
  while (!Serial.available()) { }
  Serial.readString();

  Serial.println(F("Tare..."));
  balanza.tare(20);
  Serial.println(F("OK."));

  Serial.println(F("2) Pon un peso conocido y escribe su valor en gramos:"));
  float pesoConocido_g = readFloatFromSerial();
  if (pesoConocido_g <= 0) {
    Serial.println(F("Valor invalido. Cancelado."));
    return;
  }

  delay(1200);
  long promedio = balanza.read_average(15);
  long offset   = balanza.get_offset();
  long cuentas  = promedio - offset;

  if (cuentas == 0) {
    Serial.println(F("Lectura nula. Revisa cableado."));
    return;
  }

  float nuevoScale = (float)cuentas / pesoConocido_g;
  if (!isfinite(nuevoScale) || nuevoScale <= 0) {
    Serial.println(F("Factor invalido. Cancelado."));
    return;
  }

  scaleFactor = nuevoScale;
  balanza.set_scale(scaleFactor);
  saveCalibration(scaleFactor);

  Serial.print(F("Calibracion OK. scaleFactor = "));
  Serial.println(scaleFactor, 6);
  Serial.println(F("==========================\n"));
}
