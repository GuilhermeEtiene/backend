import { Request, Response } from 'express'
import { CreateUserService } from '@services/User/CreateUserService'

class CreateUserController {
  async handle (request: Request, response: Response) {
    const { user, email, password } = request.body

    const createUserService = new CreateUserService()

    const userCreated = await createUserService.execute({
      user, email, password
    })

    return response.json(userCreated)
  }
}

export default new CreateUserController()
