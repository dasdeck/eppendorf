import express, {Express} from 'express'
import devicestate from './routes/devicestate'

const server:Express = express()

devicestate(server)

export default server