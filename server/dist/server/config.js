"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(process.env.MONGO_HOST)
var config = {
    db: {
        host: 'localhost',
        port: 27017,
        db: 'eppendorf',
        dbtest: 'eppendorf-test',
    },
    server: {
        port: 3001
    }
};
exports.default = config;
