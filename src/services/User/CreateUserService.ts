import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '@repositories/UserRepositories'
import { ValidatePasswordService } from '@services/User/ValidatePasswordService'

interface CreateUserRequest {
  user: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ user, email, password }: CreateUserRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const userAlreadyExists = await userRepository.findOne({
      user
    })

    if(userAlreadyExists) throw new Error('Usuário  já existe')

    const validadePasswordService = new ValidatePasswordService()

    const passwordHash = await validadePasswordService.execute({
      password
    })

    const userCreated = userRepository.create({
      user,
      email,
      password_hash: passwordHash
    })

    await userRepository.save(userCreated)

    return userCreated
  }
}

export { CreateUserService }
