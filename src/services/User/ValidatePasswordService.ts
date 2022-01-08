import { EncryptPasswordService } from '@services/User/EncryptPasswordService'

interface ValidatePasswordRequest {
  password: string
}

class ValidatePasswordService {
  async execute({ password }: ValidatePasswordRequest) {
    if(password.length < 6 ) throw new Error('A senha deve ter no mínimo 6 caracteres')

    const encryptPasswordService = new EncryptPasswordService()

    const passwordHash = encryptPasswordService.execute({
      password
    })

    return passwordHash

  }
}

export { ValidatePasswordService }
