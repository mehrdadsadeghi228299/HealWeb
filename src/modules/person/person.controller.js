const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { PersonModel } = require("./person.model");
const personService = require("./person.service");
class UserController {
    #service;
    PersonMessage;
    constructor () {
        autoBind(this);
        this.#service = personService;
    }

    async createdPerson(req, res, next) {
        try {
            const iscreatorId=req.?user?._id || "Admin";
           const {name,lastName,personlId,password,codeMeeli,mobile,roll,province,accessLevel,CityId}=req.body
            const id =await this.#service.createdPerson({name,lastName,personlId,password,codeMeeli,mobile,roll,province,accessLevel,CityId});
            return res.json({
                message:PersonMessage.create,
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