
// import {model} from '../src/model/DeviceState'
import {resetDB, connect} from './util'
import server from '../src/server'
import request from 'supertest'

describe('devicestate', () => {

    beforeAll(() => {
        connect()
    })

    beforeEach(done => {
        resetDB(done)
    })

    it('list', done => {

        request(server).get('devicestate').expect('Content-Type', /json/).expect(res  => {
            expect(res.body.length).toBe(1000)
            expect(res.body[500].id).toBeNull()
            console.log(res)

        }).end(() => {
            done()
        })

    })



})