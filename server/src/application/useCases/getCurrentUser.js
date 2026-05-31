class GetCurrentUser {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(userId) {
        const user = await this.userRepository.findById(userId)
        if (!user) return null
        const { password, ...safeUser } = user
        return safeUser
    }
}

module.exports = GetCurrentUser