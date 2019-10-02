
import {model as DeviceState} from '../model/devicestate'
import {Express} from 'express'

export default (app:Express) => {

    console.log('ROUTES')

    app.get('/devicestate/:id', (req, res) => {

        console.log(req.params)
        DeviceState.findOne( req.params, (err, data) => {
            res.json(data);
        })

    })

    app.get('/devicestate', (req, res) => {

        DeviceState.find((err, data) => {
            res.json(data)
        })

    })

    app.post('/devicestate', (req, res) => {

        DeviceState.find((err, data) => {
            res.json(data)
        })
    })

    app.delete('/devicestate/:id', (req, res) => {

        DeviceState.find((err, data) => {
            res.json(data)
        })
    })

    app.put('/devicestate/:id', (req, res) => {

        DeviceState.find((err, data) => {
            res.json(data)
        })
    })
}