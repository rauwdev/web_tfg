class IUserRepository {
    async findById(id)                    { throw new Error("Sin implementar") }
    async findByRole(role)                { throw new Error("Sin implementar") }
    async findByEmail(email)              { throw new Error("Sin implementar") }
    async findAll()                       { throw new Error("Sin implementar") }
    async findAllByRole(role)             { throw new Error("Sin implementar") }
    async save(user)                      { throw new Error("Sin implementar") }
    async update(user)                    { throw new Error("Sin implementar") }
    async delete(id)                      { throw new Error("Sin implementar") }
}

module.exports = IUserRepository