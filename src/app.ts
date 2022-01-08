import dotenv from 'dotenv'
import express from 'express'
import createConnection from './database'
import routes from './routes'

dotenv.config({ path: process.env.NODE_ENV === "test" ? '.env.test' : '.env' })

createConnection()

const app = express()

routes.map(route => app.use(route))

export { app }
