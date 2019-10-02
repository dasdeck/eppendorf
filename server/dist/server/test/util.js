"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("../config"));
var devicestate_1 = require("../src/model/devicestate");
var data_json_1 = __importDefault(require("../../data.json"));
function connect() {
    mongoose_1.default.connect("mongodb://" + config_1.default.db.host + ":" + config_1.default.db.port + "/" + config_1.default.db.dbtest);
}
exports.connect = connect;
function resetDB(done) {
    mongoose_1.default.connection.once('open', function () {
        devicestate_1.model.deleteMany({})
            .then(function () { return devicestate_1.model.insertMany(data_json_1.default); })
            .then(function () { return done(); });
    });
}
exports.resetDB = resetDB;
