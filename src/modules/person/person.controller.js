const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { PersonModel } = require("./person.model");
const personService = require("./person.service");
class CityController {
    #service;
    PersonMessage;
    constructor () {
        autoBind(this);
        this.#service = personService;
    }

    async createdPerson(req, res, next) {
        try {
           const {dto}=req.body
            const id =await this.#service.createdPerson(dto);
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

module.exports = new CityController();