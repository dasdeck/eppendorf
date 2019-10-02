import express, {Express} from 'express'
import devicestate from './routes/devicestate'

import config from '../config'


const server:Express = express()

devicestate(server)

//

export default server