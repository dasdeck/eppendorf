"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DeviceState_1 = require("../src/model/DeviceState");
var db = null;
describe('query', function () {
    beforeEach(function (done) {
        mongoose_1.default.connect('mongodb://localhost:27017/eppendorf-test');
        mongoose_1.default.connection.once('open', function () {
            done();
        });
    });
    it('database present', function (done) {
        // simple test to ensure database is up and running
        DeviceState_1.DeviceState.findOne({ id: 500 }, function (err, res) {
            expect(err).toBeNull();
            expect(res.id).toBe(500);
            done();
        });
    });
    it('simple gql query', function (done) {
        done();
    });
});
