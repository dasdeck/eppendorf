"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devicestate_1 = require("../model/devicestate");
exports.default = (function (app) {
    console.log('ROUTES');
    app.get('/devicestate/:id', function (req, res) {
        console.log(req.params);
        devicestate_1.model.findOne(req.params, function (err, data) {
            res.json(data);
        });
    });
    app.get('/devicestate', function (req, res) {
        devicestate_1.model.find(function (err, data) {
            res.json(data);
        });
    });
    app.post('/devicestate', function (req, res) {
        devicestate_1.model.find(function (err, data) {
            res.json(data);
        });
    });
    app.delete('/devicestate/:id', function (req, res) {
        devicestate_1.model.find(function (err, data) {
            res.json(data);
        });
    });
    app.put('/devicestate/:id', function (req, res) {
        devicestate_1.model.find(function (err, data) {
            res.json(data);
        });
    });
});
