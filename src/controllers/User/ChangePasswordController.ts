import { Request, Response } from 'express'
import { ChangePasswordUserService } from '@services/User/ChangePasswordUserService'

class ChangePasswordController {
  async handle (request: Request, response: Response) {
    const { old_password, new_password } = request.body
    console.log(request.userId)

    const changePasswordUserService = new ChangePasswordUserService()

    await changePasswordUserService.execute({
      id: request.userId,
      old_password,
      new_password
    })

    return response.status(200).send()
  }
}

export default new ChangePasswordController()
