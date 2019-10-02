import mongoose from 'mongoose'

let DeviceState = mongoose.model('DeviceState', new mongoose.Schema({
    id: Number, //@TODO narrow down to integer
    location: String,
    type: ["freezer", "cycler", "centrifuge", "shaker", "pipette"],
    device_health: [  "good","ok","broken","bad","mediocre"],
    last_used: Date, //@TODO narrow down date validation to internal format requirements
    price: Number,
    color: {
        type: String,
        validate: (value:String) => value.substring(0) === '#' //@TODO oversimplified validator, replace with color class
    }

}))

export {
    DeviceState
}