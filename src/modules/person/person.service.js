const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { PersonModel } = require("./person.model");


class PersontService {
    #model;
    constructor () {
        autoBind(this);
        this.#model = PersonModel;
    }

    async createdPerson (user,dto) {
        const model = this.#model.create(dto);
        return model._id;

    }
    async  updatePerson(dto) {

    }
    async ChangePasswordPerson (userId) {

    }


}
module.exports = new PersontService();