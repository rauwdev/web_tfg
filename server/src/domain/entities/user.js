class User {
    constructor( {userId, name, surname, email, password, role} = {}) {
        if (!email) throw new Error("User require un email")
        if (!name) throw new Error("User require un name")
        
        const validRoles = ["admin", "professional", "client"]
        if (role && !validRoles.includes(role)) {
            throw new Error(`Rol inválido: ${role}`)
        }

        this.userId = userId
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
        this.role = role
    }
}

module.exports = User