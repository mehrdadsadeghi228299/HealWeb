const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { CityModel } = require("./city.model");
const { CityMessage } = require("./parameter.message");
class parameterService {
    #model;
    constructor () {
        autoBind(this);
        this.#model =CityModel ;
    }
    async createparameter(dto) {

    }
    async findMyparameterANDShow(city) {

    }
    async Addparamters(id_paramters,nameCity) {
     
    }
    async showParameters(city) {
    }

    async checkExistCity(name){
        const result = await this.#model.findOne({name});
        if(!result) createHttpError.NotFound(CityMessage.NotFound);
        return result 

    }
}

module.exports = new parameterService();