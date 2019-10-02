
import mongoose from 'mongoose'
import {DeviceState} from '../src/model/DeviceState'

let db = null;

describe('query', () => {

    beforeEach(done => {
        mongoose.connect('mongodb://localhost:27017/eppendorf-test');
        mongoose.connection.once('open', () => {
            done()
        })
    })

    it('database present', done => {

        // simple test to ensure database is up and running
        DeviceState.findOne({id: 500}, (err:any, res:any) => {
            expect(err).toBeNull()
            expect(res.id).toBe(500);
            done()
        })
    })

    it('simple gql query', done => {
        done()
    })

})