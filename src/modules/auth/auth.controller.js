const CookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");
const autoBind = require("auto-bind");
const authService = require("./auth.service");
const { AuthMessage } = require("./auth.messages");
class AuthController {
    #service;
    constructor(){
        autoBind(this);
        this.#service = authService;
    }
    async login(req, res, next) {
        try {
            const AccessToken=CookieNames.AccessToken;
            const {codemeeli , password} = req.body;
            const accessToken= await this.#service.login(codemeeli, password);
            return res.cookie('access_token', accessToken,{
                httpOnly: true,
                secure:process.env.NODE_ENV===NodeEnv.Production
            }).json({
                message:AuthMessage.LoginSuccessfully,
                token:accessToken
            });
        } catch (error) {
            next(error)
        }
    }
    async sendOTP(req, res, next) {
        try {
            const {mobile} = req.body;
            await this.#service.sendOTP(mobile);
            return res.json({
                message: AuthMessage.SendOtpSuccessfully
            });
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req, res, next) {
        try {
            const {mobile, code} = req.body;
            const token = await this.#service.checkOTP(mobile, code);
            return res.cookie(CookieNames.AccessToken, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === NodeEnv.Production 
            }).status(200).json({
                message: AuthMessage.LoginSuccessfully,
            });
        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next) {
        try {
            return res.clearCookie(CookieNames.AccessToken).status(200).json({
                message: AuthMessage.LogoutSuccessfully
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    AuthController:new AuthController()
}