import { AppError } from '../../errors/AppError'
import { EncryptPasswordService } from './EncryptPasswordService'

interface ValidatePasswordRequest {
    password: string
}

class ValidatePasswordService {
  async execute ({ password }: ValidatePasswordRequest) {
    if (password.length < 6) throw new AppError('A senha deve ter no mínimo 6 caracteres.')

    const encryptPasswordService = new EncryptPasswordService()

    const passwordHash = await encryptPasswordService.execute({ password })

    return passwordHash
  }
}

export { ValidatePasswordService }
