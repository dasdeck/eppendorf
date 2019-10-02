"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DeviceState = mongoose_1.default.model('DeviceState', new mongoose_1.default.Schema({
    id: Number,
    location: String,
    type: ["freezer", "cycler", "centrifuge", "shaker", "pipette"],
    device_health: ["good", "ok", "broken", "bad", "mediocre"],
    last_used: Date,
    price: Number,
    color: {
        type: String,
        validate: function (value) { return value.substring(0) === '#'; } //@TODO oversimplified validator, replace with color class
    }
}));
exports.DeviceState = DeviceState;
