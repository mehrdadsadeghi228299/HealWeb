const {Authorization, CheckRole} = require('../../common/guard/authorization.guard');
const { UserController } = require('./person.controller');
const { validatorUser } = require('./person.validator');
const router = require('express').Router();

router.post("/create-user",validatorUser,CheckRole('admin'),UserController.createdPerson);
router.put("/update",Authorization,CheckRole('admin'),UserController.updatePerson);
router.put("/change-password",CheckRole('admin'),UserController.ChangePasswordPerson);

module.exports = {
    UserRoutes:router
};