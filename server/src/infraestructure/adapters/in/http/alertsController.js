const { getAllAlerts, getLatestAlerts } = require("../../../config/container")

async function getAll(req, res, next) {
    try {
        const data = await getAllAlerts.execute()
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

async function getLatest(req, res, next) {
    try {
        const data = await getLatestAlerts.execute(req.query.lastId)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    getLatest
}