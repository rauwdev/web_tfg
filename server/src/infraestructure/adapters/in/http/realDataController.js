const { createRealData, searchRealData, getRealHourlyCount } = require("../../../config/container")

async function create(req, res, next) {
    try {
        const data = req.body
        const realData = await createRealData.execute(data)
        res.status(201).json(realData)
    } catch (error) {
        next(error)
    }
}

async function search(req, res, next) {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 15
        const { vehicle, from: fromDate, to: toDate } = req.query
        const vehicleId = vehicle ? Number(vehicle) : undefined

        const dataList = await searchRealData.execute({ vehicle, fromDate, toDate, page, limit })
        res.status(200).json(dataList)
    } catch (error) {
        next(error)
    }
}

async function countHourly(req, res, next) {
    try {
        const count = await getRealHourlyCount.execute()
        res.status(200).json(count)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    countHourly,
    search
}