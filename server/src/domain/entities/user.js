class User {
    constructor( {userId, name, surname, email, password, role} = {}) {
        this.userId = userId
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
        this.role = role
    }

    isAdmin() {
        return this.role === "admin"
    }
}

module.exports = User