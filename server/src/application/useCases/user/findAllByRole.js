class FindAllByRole {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(role) {
        const users = await this.userRepository.findAllByRole(role)
        return users
    }
}

module.exports = FindAllByRole