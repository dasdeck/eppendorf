"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./src/server"));
var config_1 = __importDefault(require("./config"));
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://" + config_1.default.db.host + ":" + config_1.default.db.port + "/" + config_1.default.db.db);
server_1.default.listen(config_1.default.server.port, function () { return console.log('started'); });
