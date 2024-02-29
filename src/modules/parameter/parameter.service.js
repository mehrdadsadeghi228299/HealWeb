const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { CityMessage, parameterMessage } = require("./parameter.message");
const { PersonModel } = require("../person/person.model");
const { PersonMessage } = require("../person/person.message");
const { CityModel } = require("../city/city.model");
class parameterService {
    #model;
    #usermodel;
    constructor () {
        autoBind(this);
        this.#model =CityModel ;
        this.#usermodel =PersonModel ;
    }
    async createparameter(dto,userId) {
        const user = await this.#usermodel.findById(userId);
        if(!user) return createHttpError.MethodNotAllowed(PersonMessage.NotFound);
        const parameters = await this.#model.create({
            province:user.province,
            city:user.subProvince,
            user:userId,
            num1:dto.num1,
            num2:dto.num2,
            num3:dto.num3,
            num4:dto.num4,
            num5:dto.num5,
            num6:dto.num6,
            num7:dto.num7,
            num8:dto.num8,
            num9:dto.num9,
        });

        return parameters._id.toString();

    }
    async findMyparameterANDShow(city) {

    }
    async AddSaharTeam(id_paramters,saharTeam) {
     const parameters = await this.#model.updateOne({
                                    _id:id_paramters
                                    },{
                                        '$set':{SaharTeamCity:saharTeam}
                                    }    
                                        );
    if(!parameters || parameters.error) createHttpError.BadRequest(parameterMessage.NotFound);
    return "ok" 
    }
    async AddSahabTeam(id_paramters,sahabTeam) {
        const parameters = await this.#model.updateOne({
                                    _id:id_paramters
                                    },{
                                        '$set':{SaharTeamCity:sahabTeam}
                                    });    
        if(!parameters || parameters.error) createHttpError.BadRequest(parameterMessage.NotFound);
        return "ok" 
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