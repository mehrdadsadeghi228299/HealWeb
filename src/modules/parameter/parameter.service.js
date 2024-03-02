const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { CityMessage, parameterMessage } = require("./parameter.message");
const { PersonModel } = require("../person/person.model");
const { PersonMessage } = require("../person/person.message");
const { CityModel } = require("../city/city.model");
const { SaharTeamModel, SahabTeamModel } = require("./parameter.model");
class parameterService {
    #model;
    #usermodel;
    #sharmodel;
    #shabmodel;
    constructor () {
        autoBind(this);
        this.#model = CityModel ;
        this.#usermodel = PersonModel ;
        this.#sharmodel = SaharTeamModel;
        this.#shabmodel = SahabTeamModel ;
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

    async showParameters(city) {
    }

    async checkExistCity(name){
        const result = await this.#model.findOne({name});
        if(!result) createHttpError.NotFound(CityMessage.NotFound);
        return result 

    }

    async addSaharTeamParamter(id_parameter,name){
        return this.#model.updateOne({_id:id_parameter},{
             '#push':{'s.name':name}
         });
     }    
    async addSahabTeamParamter(countWomen,countMen,countPP,countPR,count,id_parameter){
        const result = this.#model.findById({_id:id_parameter});
        result.b.countWomen=countWomen;
        result.b.countMen=countMen;
        result.b.countPP=countPP;
        result.b.countPR=countPR;
        result.b.count=count;
        return result.save();

     }
    /**
     *     async AddSaharTeam(id_paramters,sahabTeam) {
        const parameters = await this.#model.updateOne({
            _id:id_paramters
            },{
                '$set':{SaharTeamCity:sahabTeam}
            });    
        if(!parameters || parameters.error) createHttpError.BadRequest(parameterMessage.NotFound);
        return "ok" 
    }
    async createSaharTeam(name) {
        const user = await this.#sharmodel.create(name);
        if(!user) return createHttpError.MethodNotAllowed(PersonMessage.NotFound);
        const parameters = await this.#model.findOne({})
        return user._id.toString();

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
    async createSaharTeam(dto,userId) {
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
     */
}

module.exports = new parameterService();