import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '@repositories/UserRepositories'

interface CreateUserRequest {
  user: string
  email: string
  password_hash: string
}

class CreateUserService {
  async execute({ user, email, password_hash }: CreateUserRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const userCreated = userRepository.create({
      user,
      email,
      password_hash
    })

    await userRepository.save(userCreated)

    return userCreated
  }
}

export { CreateUserService }
