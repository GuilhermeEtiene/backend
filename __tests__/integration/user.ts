import request from 'supertest'
import { app } from '../../src/app'

describe('POST / users', () => {
  test('should create an user', async () => {
    const user = {
      user: 'teste',
      email: 'teste@teste.com.br',
      password: '123456'
    }
    const response = await request(app)
      .post('/users')
      .send(user)

    expect(response.status).toBe(200)
  })

  test('should return user already exists', async () => {
    const user = {
      user: 'teste',
      email: 'teste@teste.com.br',
      password: '123456'
    }
    const response = await request(app)
      .post('/users')
      .send(user)

    expect(response.status).toBe(400)
  })
})
