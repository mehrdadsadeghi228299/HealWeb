const {Authorization, CheckRole} = require('../../common/guard/authorization.guard');
const parameterController = require('./parameter.controller');

const router = require('express').Router();

router.post('/create-paramters',Authorization,CheckRole('admin','creator'),parameterController.createparameter);
router.put('/update-paramter',Authorization,CheckRole('admin','updater'),parameterController.updateparameter);
router.put('/conformation-paramter',Authorization,CheckRole('admin','updater'),parameterController.conformationPrarmter);
router.put('/add-saharTeam',Authorization,CheckRole('admin','creator'),parameterController.addSaharTeamParamter);
router.put('/add-sahabTeam',Authorization,CheckRole('admin','creator'),parameterController.addSahabTeamParamter);
router.put('/add-volunter',Authorization,CheckRole('admin','creator'),parameterController.addvolunteries);
router.put('/add-personel',Authorization,CheckRole('admin','creator'),parameterController.addPersonel);
router.get('/get-paramters/{city}',Authorization,CheckRole('admin','normal','creator'),parameterController.findMyparameterANDShow);


module.exports = {
    parameterRouter:router
};
