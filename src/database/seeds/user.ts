import { User } from '../../entities/User'
import { CreateUserService } from '../../services/User/CreateUserService'

const setUserDefault = async connection => {
  const userDefault =
    {
      user: 'MASTER.GHAP',
      password: 'ghap@2021#',
      email: 'DEVGHAP@GHAP.COM.BR'
    }

  const userExists = await connection.manager.find(User)

  if (userExists.length < 1) {
    const createUserService = new CreateUserService()
    const user = await createUserService.execute(userDefault)
    return user
  }
}

export { setUserDefault }
