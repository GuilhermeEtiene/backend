import { hash } from 'bcryptjs'

interface EncryptPasswordRequest {
  password: string
}

class EncryptPasswordService {
  async execute({ password }: EncryptPasswordRequest) {
    const passwordHash = await hash(password, 8)
    return passwordHash
  }
}

export { EncryptPasswordService }
