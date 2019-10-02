"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {model} from '../src/model/DeviceState'
var util_1 = require("./util");
var server_1 = __importDefault(require("../src/server"));
var supertest_1 = __importDefault(require("supertest"));
describe('devicestate', function () {
    beforeAll(function () {
        util_1.connect();
    });
    beforeEach(function (done) {
        util_1.resetDB(done);
    });
    it('list', function (done) {
        supertest_1.default(server_1.default).get('devicestate').expect('Content-Type', /json/).expect(function (res) {
            expect(res.body.length).toBe(1000);
            expect(res.body[500].id).toBeNull();
            console.log(res);
        }).end(function () {
            done();
        });
    });
});
