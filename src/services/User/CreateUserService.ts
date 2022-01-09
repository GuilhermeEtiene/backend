import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '@repositories/UsersRepositories'
import { AppError } from '../../errors/AppError'
import { ValidatePasswordService } from './ValidatePasswordService'

interface CreateUserRequest {
    user: string
    email: string
    password: string
}

class CreateUserService {
  async execute ({ user, email, password }: CreateUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    const userAlreadyExists = await usersRepository.findOne({
      user
    })

    const validatePasswordService = new ValidatePasswordService()

    const passwordHash = await validatePasswordService.execute({
      password
    })

    if (userAlreadyExists) throw new AppError('Usuário já existe')

    const userCreated = usersRepository.create({
      user,
      email,
      password_hash: passwordHash
    })

    await usersRepository.save(userCreated)

    return userCreated
  }
}

export { CreateUserService }
