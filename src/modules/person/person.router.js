const { UserController } = require('./person.controller');
const router = require('express').Router();

router.post("/create-user",UserController.createdPerson);
router.put("/update",UserController.updatePerson);
router.put("/change-password",UserController.ChangePasswordPerson);

module.exports = {
    UserRoutes:router
};