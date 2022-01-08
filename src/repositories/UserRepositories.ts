import { User } from '@entities/User'
import { Repository, EntityRepository } from 'typeorm'

@EntityRepository(User)
class UserRepositories extends Repository<User> {}

export { UserRepositories }
