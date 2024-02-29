const Authorization = require('../../common/guard/authorization.guard');
const { UserController } = require('./person.controller');
const { validatorUser } = require('./person.validator');
const router = require('express').Router();

router.post("/create-user",validatorUser,UserController.createdPerson);
router.put("/update",Authorization,UserController.updatePerson);
router.put("/change-password",UserController.ChangePasswordPerson);

module.exports = {
    UserRoutes:router
};