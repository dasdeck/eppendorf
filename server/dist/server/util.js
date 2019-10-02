"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config"));
var mongoose_1 = __importDefault(require("mongoose"));
var util_1 = require("./test/util");
mongoose_1.default.connect("mongodb://" + config_1.default.db.host + ":" + config_1.default.db.port + "/" + config_1.default.db.db);
if (process.argv.includes('--initdb')) {
    util_1.resetDB(function () {
        process.exit();
    });
}
