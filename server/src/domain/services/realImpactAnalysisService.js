class RealImpactAnalysisService {
    analyzeImpact(data) {
        let impact = null
        if (data.impact > 2) {
            impact = true
        }
        return impact
    }
}

module.exports = RealImpactAnalysisService