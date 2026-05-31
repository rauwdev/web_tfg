const IUserRepository = require("../../../../domain/repositories/IUserRepository")
const User = require("../../../../domain/entities/user")
const UserModel = require("./userModel")

class UserSequelizeRepository extends IUserRepository {
    async findById(id) {
        const row = await UserModel.findByPk(id)
        if (!row) return null
        return new User(row.toJSON())
    }

    async findByRole(role) {
        const row = await UserModel.findOne({ where: { role } })
        if (!row) return null
        return new User(row.toJSON())
    }

    async findByEmail(email) {
        const row = await UserModel.findOne({ where: { email } })
        if (!row) return null
        return new User(row.toJSON())
    }

    async findAll() {
        const rows = await UserModel.findAll()
        return rows.map(row => new User(row.toJSON()))
    }

    async findAllByRole(role) {
        const rows = await UserModel.findAll({ where: { role } })
        return rows.map(row => new User(row.toJSON()))
    }

    async save(user) {
        const created = await UserModel.create(user)
        return new User(created.toJSON())
    }

    async update(user) {
        const row = await UserModel.findByPk(user.userId)
        if (!row) return null
        await row.update(user)
        return new User(row.toJSON())
    }

    async delete(id) {
        const row = await UserModel.findByPk(id)
        if (!row) return null
        await row.destroy()
        return true
    }
}

module.exports = UserSequelizeRepository