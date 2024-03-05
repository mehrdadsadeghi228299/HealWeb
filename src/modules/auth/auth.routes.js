const {Router} = require("express");
const {Authorization} = require("../../common/guard/authorization.guard");
const { AuthController } = require("./auth.controller");
const router = Router();
router.post("/send-otp", AuthController.sendOTP);
router.post("/login", AuthController.login);
router.post("/check-otp", AuthController.checkOTP);
router.get("/logout", Authorization, AuthController.logout);
module.exports = {
    AuthRouter: router
}