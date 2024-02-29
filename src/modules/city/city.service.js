const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { CityModel } = require("./city.model");
const { CityMessage } = require("./city.message");
class CityService {
    #model;
    constructor () {
        autoBind(this);
        this.#model =CityModel ;
    }
    async createCity(dto) {
        const check = await this.#model.findOne({name:dto.name});
        if(check) return createHttpError.NotAcceptable(CityMessage.AlreadyExist);
        const result = await this.#model.create(dto);
        return result._id.toString();
    }
    async findMyCityANDShow(city) {
        return await this.#model.findOne({name:city});
   

    }
    async Addparamters(id_paramters,nameCity,provinceName) {
        const result = this.#model.updateOne({name:nameCity},{
            '$set':{paramters:id_paramters}
        })
    }
    async showParameters() {

    }

    async checkExistCity(name){
        const result = await this.#model.findOne({name});
        if(!result) createHttpError.NotFound(CityMessage.NotFound);
        return result 

    }
}

module.exports = new CityService();