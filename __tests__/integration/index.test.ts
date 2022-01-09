import * as user from './user'
import { createConnection } from 'typeorm'

describe('End-To-End Test', () => {
  it('User', async () => user)
})

beforeAll(async () => {
  await createConnection()
})
