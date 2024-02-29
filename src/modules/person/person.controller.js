const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const personService = require("./person.service");
const { validationResult } = require("express-validator");
const { PersonMessage } = require("./person.message");
const { HttpStatusCode } = require("axios");
class UserController {
    #service;
    constructor () {
        autoBind(this);
        this.#service = personService;
    }

    async createdPerson(req, res, next) {
        try {
            const iscreatorId=req?.user?._id || "Admin";
            const errorValidator = validationResult(req);
            if (!errorValidator) {
                return res.status(HttpStatusCode.NotImplemented).json({
                    statusCodes: HttpStatusCode.NotImplemented,
                    message: errorValidator
                });   
            }
           const {name,lastName,personlId,password,codeMeeli,mobile,rule,province,accessLevel,subProvince,CityId}=req.body
            const id =await this.#service.createdPerson({name,lastName,personlId,password,codeMeeli,mobile,rule,province,subProvince,accessLevel,CityId},iscreatorId);
            return res.json({
                message:PersonMessage.Created,
                withId:id
            });
        } catch (error) {
            next(error);
        }
    }

    async updatePerson(req, res, next) {
       try {
        const user=req.user;
        const dto=req.body;
        const result = await this.#service.updatePerson(user,dto)      
        return res.json({
            message:PersonMessage.UPDATE,
            withId:id
        });
    } catch (error) {
        next(error);
       }
    }
    async ChangePasswordPerson(req, res, next) {
        try {
         
        } catch (error) {
         next(error);
        }
     }

}

module.exports = {
    UserController:new UserController()
}