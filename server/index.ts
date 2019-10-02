import server from './src/server'
import config from './config'
import mongoose from 'mongoose'

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.db}`)
server.listen(config.server.port, () => console.log('started'))