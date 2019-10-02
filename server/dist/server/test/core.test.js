"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devicestate_1 = require("../src/model/devicestate");
var util_1 = require("./util");
describe('query', function () {
    beforeAll(function () {
        util_1.connect();
    });
    beforeEach(function (done) {
        util_1.resetDB(done);
    });
    it('database present', function (done) {
        // simple test to ensure database is up and running
        devicestate_1.model.findOne({ id: 500 }, function (err, res) {
            expect(err).toBeNull();
            expect(res.id).toBe(500);
            done();
        });
    });
});
