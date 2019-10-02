import mongoose from 'mongoose'
import config from '../config'

import {model} from '../src/model/devicestate'
import data from '../../data.json'

export function connect() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.dbtest}`)
}
export function resetDB(done: Function) {

    mongoose.connection.once('open', () => {
        model.deleteMany({})
        .then(() => model.insertMany(data))
        .then(() => done());
    })
}

