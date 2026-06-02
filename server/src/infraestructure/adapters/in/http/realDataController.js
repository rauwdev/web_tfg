const { createRealData } = require("../../../config/container")

async function create(req, res, next) {
    try {
        const data = req.body
        const realData = await createRealData.execute(data)
        res.status(201).json(realData)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create
}