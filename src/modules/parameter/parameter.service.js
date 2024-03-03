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
        this.#model = CityModel ;
        this.#usermodel = PersonModel ;
    }
    async createparameter(dto,userId) {
        const user = await this.#usermodel.findById(userId);
        if(!user) return createHttpError.MethodNotAllowed(PersonMessage.NotFound);
        const newparameters = await this.#model.create({
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
        user.paramters= newparameters._id;
        newparameters._id;
        const addResutToUser = await this.#usermodel.findOne({_id:user.id});
        if(!addResutToUser ||addResutToUser.error )
        return newparameters._id.toString();

    }

    async findMyparameterANDShow(city) {
        const parametersCity = await this.#model.find({city:city});
        if(!parametersCity|| parametersCity.error) createHttpError.NotAcceptable(parameterMessage.CityNotFound);
        return parametersCity;
    }



    async checkExistCity(name){
        const result = await this.#model.findOne({name});
        if(!result) createHttpError.NotFound(CityMessage.NotFound);
        return result 

    }

    async addSaharTeamParamter(id,name){
        const extractParamterId= await this.#usermodel.findById({_id:id});   
          return this.#model.updateOne({_id:extractParamterId._id},{
             '#push':{'s.name':name}
         });
     }    
    async addSahabTeamParamter(countWomen,countMen,countPP,countPR,count,id){
        const extractParamterId= await this.#usermodel.findById({_id:id});   
        const result = this.#model.findById({_id:extractParamterId._id});
        result.b.countWomen=countWomen;
        result.b.countMen=countMen;
        result.b.countPP=countPP;
        result.b.countPR=countPR;
        result.b.count=count;
        return result.save();

     }
     async addVolunteriesParamter(id,name){
        const extractParamterId = await this.#usermodel.findById({_id:id});   
        const result = this.#model.findById({_id:extractParamterId});
        result.volunter=name;
        return result.save();
     }
     async addPersonelParamter(id,name){
        const extractParamterId = await this.#usermodel.findById({_id:id});   
        const result = this.#model.findById({_id:extractParamterId});
        result.personel=name;
        return result.save();
     }

}

module.exports = new parameterService();