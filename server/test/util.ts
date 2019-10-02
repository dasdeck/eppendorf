import mongoose from 'mongoose'
import config from '../config'



export function connect() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.dbtest}`)
}
