const parameterController = require('./parameter.controller');

const router = require('express').Router();

router.post('/create-paramter',parameterController.createparameter);

module.exports = {
    
    parameterRouter:router
};