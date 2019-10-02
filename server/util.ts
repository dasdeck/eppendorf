import config from './config'
import mongoose from 'mongoose'
import {resetDB} from './test/util'

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.db}`)

if (process.argv.includes('--initdb')) {
    resetDB(() => {
        process.exit()
    })
}