const createHttpError = require("http-errors");
const AuthorizationMessage = require("../messages/auth.message");
const jwt = require("jsonwebtoken");
const CookieNames=require("../../common/constant/cookie.enum.js");
const {PersonModel:UserModel} = require("../../modules/person/person.model");
require("dotenv").config();
const Authorization = async (req, res, next) => {
    try {
        const token = req?.cookies?.access_token;
        if (!token) throw new createHttpError.Unauthorized(AuthorizationMessage.Login);
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof data === "object" && "id" in data) {
            const user = await UserModel.findById(data.id, {_id:1,rule:1,accessLevel:1}).lean();
            if (!user) throw new createHttpError.Unauthorized(AuthorizationMessage.NotFoundAccount);
            req.user = user;
            return next();
        }
        throw new createHttpError.Unauthorized(AuthorizationMessage.InvalidToken);
    } catch (error) {
        next(error);
    }
};
const CheckRole = (roles) => async (req, res, next) => {
    let id= req.user._id;
    //retrieve employee info from DB
    const employee = await UserModel.findById(id);
    !roles.includes(employee.rule)
      ? res.status(401).json("Sorry you do not have access to this route")
      : next();
  };
module.exports = {
    Authorization,
    CheckRole
};