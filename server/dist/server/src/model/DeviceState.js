"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var data = {
    id: Number,
    location: String,
    type: ["freezer", "cycler", "centrifuge", "shaker", "pipette"],
    device_health: ["good", "ok", "broken", "bad", "mediocre"],
    last_used: Date,
    price: Number,
    color: {
        type: String,
        validate: function (value) { return value.substring(0, 1) === '#'; } //@TODO oversimplified validator, replace with color class
    }
};
exports.data = data;
var schema = new mongoose_1.default.Schema(data);
exports.schema = schema;
var model = mongoose_1.default.model('DeviceState', schema);
exports.model = model;
