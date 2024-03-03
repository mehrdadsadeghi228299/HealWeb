const Authorization = require('../../common/guard/authorization.guard');
const parameterController = require('./parameter.controller');

const router = require('express').Router();

router.post('/create-paramter',Authorization,parameterController.createparameter);
router.put('/add-saharTeam',Authorization,parameterController.addSahabTeamParamter);
router.put('/add-sahabTeam',Authorization,parameterController.addSahabTeamParamter);
router.put('/add-volunter',Authorization,parameterController.addvolunteries);
router.put('/add-personel',Authorization,parameterController.addPersonel);
router.get('/get-paramters/{city}',Authorization,parameterController.findMyparameterANDShow);


module.exports = {
    parameterRouter:router
};
