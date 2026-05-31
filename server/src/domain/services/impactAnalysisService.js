class ImpactAnalysisService {
    analyzeImpact(data) {
        const zones = {
            front: data.impactFrontLeft + data.impactFrontCenter + data.impactFrontRight,
            left: data.impactLeftSideFront + data.impactLeftSideCenter + data.impactLeftSideRear,
            right: data.impactRightSideFront + data.impactRightSideCenter + data.impactRightSideRear,
            rear: data.impactRearLeft + data.impactRearCenter + data.impactRearRight
        }
        if (zones.front > 50 || zones.left > 50 || zones.right > 50 || zones.rear > 50) {
            let zoneName
            let severity
            const maxValue = Math.max(zones.front, zones.left, zones.right, zones.rear)
            if (maxValue === zones.front) {
                zoneName = "front"
            } else if (maxValue === zones.left) {
                zoneName = "left"
            } else if (maxValue === zones.right) {
                zoneName = "right"
            } else {
                zoneName = "rear"
            }

            if (zoneName === "front") {
                if (data.impactFrontLeft > data.impactFrontCenter && data.impactFrontLeft > data.impactFrontRight) {
                    zoneName = "front-left"
                } else if (data.impactFrontRight > data.impactFrontCenter) {
                    zoneName = "front-right"
                } else {
                    zoneName = "front-center"
                }
            } else if (zoneName === "left") {
                if (data.impactLeftSideFront > data.impactLeftSideCenter && data.impactLeftSideFront > data.impactLeftSideRear) {
                    zoneName = "leftSide-front"
                } else if (data.impactLeftSideRear > data.impactLeftSideCenter) {
                    zoneName = "leftSide-rear"
                } else {
                    zoneName = "leftSide-center"
                }
            } else if (zoneName === "right" ) {
                if (data.impactRightSideFront > data.impactRightSideCenter && data.impactRightSideFront > data.impactRightSideRear) {
                    zoneName = "rightSide-front"
                } else if (data.impactRightSideRear > data.impactRightSideCenter) {
                    zoneName = "rightSide-rear"
                } else {
                    zoneName = "rightSide-center"
                }
            } else if (zoneName === "rear") {
                if (data.impactRearLeft > data.impactRearCenter && data.impactRearLeft > data.impactRearRight) {
                    zoneName = "rear-left"
                } else if (data.impactRearRight > data.impactRearCenter) {
                    zoneName = "rear-right"
                } else {
                    zoneName = "rear-center"
                }
            }

            if (maxValue > 50 && maxValue <= 150) {
                severity = "minor"
            } else if (maxValue > 150 && maxValue <= 200) {
                severity = "moderate"
            } else if (maxValue > 200 && maxValue <= 450) {
                severity = "severe"
            } else if (maxValue > 450) {
                severity = "fatal"
            }
            return {
                zoneName,
                severity
            }
        } else {
            return null
        }
    }
}

module.exports = ImpactAnalysisService