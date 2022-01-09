import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '@repositories/UsersRepositories'
import { AppError } from '../../errors/AppError'

interface IAuthenticateRequest {
    user: string,
    password: string
}

class AuthenticateUserService {
  async execute ({ user, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    const userExists = await usersRepository.findOne({
      select: ['id', 'user', 'password_hash'],
      where: {
        user
      }
    })
    if (!userExists) throw new AppError('Usuário ou senha inválidos.', 401)

    const passwordMatch = await compare(password, userExists.password_hash)
    if (!passwordMatch) throw new AppError('Usuário ou senha inválidos.', 401)

    const token = sign(
      {
        user: userExists.user,
        userId: userExists.id,
        email: userExists.email
      },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    )
    return {
      token
    }
  }
}

export { AuthenticateUserService }
