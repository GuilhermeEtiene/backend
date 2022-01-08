import dotenv from 'dotenv'
import express from 'express'
import createConnection from './database'
import cors from 'cors'
import routes from './routes'

dotenv.config({ path: process.env.NODE_ENV === "test" ? '.env.test' : '.env' })

createConnection()

const app = express()

app.use(express.json())
app.use(cors())

routes.map(route => app.use(route))

export { app }
