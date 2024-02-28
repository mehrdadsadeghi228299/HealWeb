const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { PersonModel } = require("./person.model");
const { check } = require("express-validator");
const { PersonMessage } = require("./person.message");


class PersontService {
    #model;
    constructor () {
        autoBind(this);
        this.#model = PersonModel;
    }

    async createdPerson (dto,iscreatorId) {
      // this.checkExistPerson(iscreatorId)
     //  if(!userId) createHttpError.NotFound(PersonMessage.NotFound);
       const check=await this.#model.findOne({
                                                codeMeeli:dto.codeMeeli 
                                                ,mobile:dto.mobile 
                                                , personlId:dto.personlId
                                            });
       if(check) return createHttpError.NotAcceptable(PersonMessage.AlreadyExist)
        const newuser = await this.#model.create(dto);
        return newuser._id;

    }
    async  updatePerson(dto) {

    }
    async ChangePasswordPerson (userId) {

    }

    async checkExistPerson(userId){
        const id =await this.#model.findById(userId);
        return id

    }
}
module.exports = new PersontService();