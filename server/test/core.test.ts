
import {model} from '../src/model/devicestate'
import {connect} from './util'
import {resetDB} from '../util'

describe('query', () => {

    beforeAll(() => {
        connect()
    })

    beforeEach(done => {
        resetDB(done)
    })

    it('database present', done => {

        // simple test to ensure database is up and running
        model.findOne({id: 500}, (err:any, res:any) => {
            expect(err).toBeNull()
            expect(res.id).toBe(500);
            done()
        })
    })


})