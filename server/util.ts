import config from './config'
import mongoose from 'mongoose'
import data from './data.json'
import {model} from './src/model/devicestate'

export function resetDB(done: Function) {

    mongoose.connection.once('open', () => {
        model.deleteMany({})
        .then(() => model.insertMany(data))
        .then(() => done());
    })
}

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.db}`)

if (process.argv.includes('--initdb')) {
    resetDB(() => {
        process.exit()
    })
}