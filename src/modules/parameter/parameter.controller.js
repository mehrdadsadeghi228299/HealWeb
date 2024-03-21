const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const parameterService = require("./parameter.service");
const { parameterMessage } = require("./parameter.message");
class parameterController{
    #service;
    constructor () {
        autoBind(this);
        this.#service = parameterService ;
    }
    async createparameter(req, res, next) {
     try {
        const userId=req.user._id;
        const {num1,num2,num3,num4,num5,num6,num7,num8,num9,isMayor,ishealPrvince,isCountry,iscity,who}=req.body;
        await this.#service.createparameterService({num1,num2,num3,num4,num5,num6,num7,num8,num9,isMayor,ishealPrvince,isCountry,iscity,who},userId);
        return res.json({
            message:parameterMessage.CreatedParameters,
        });
     } catch (error) {
        next(error);
     }
    }
    async updateparameter(req,res,next){
        try {
            const userId=req.user._id;
            const {num1,num2,num3,num4,num5,num6,num7,num8,num9,id}=req.body;
            await this.#service.updateparameterService({num1,num2,num3,num4,num5,num6,num7,num8,num9},id,userId);
            return res.json({
                message:parameterMessage.Updated,
            });
         } catch (error) {
            next(error);
         }        
    }
    async findMyparameterANDShow(req, res,next) {
        try {
            const {city}=req.body;
            const result = await this.#service.findMyparameterANDShow(city);
            return result.json({
                message:parameterMessage.RequestOK,
                result:result
            })
        } catch (error) {
            next(error);
        }

    }
    async addSaharTeamParamter(req,res,next){
        try {
            const {name}=req.body;
            const id=req.user._id;
            console.log(id);
            const result = await this.#service.addSaharTeamParamter(name,id);
            if(!result || result.errors) createHttpError.NotAcceptable(parameterMessage.NotFound);;    
            return res.json({
                message:parameterMessage.RequestProcessForAddingToSaharTeam
            });
        } catch (error) {
            next(error);
        }
    }
    async addSahabTeamParamter(req,res,next){
        try {
            const {countWomen,countMen,countPP,countPR,count}=req.body;
            const id=req.user._id;
            const result = await this.#service.addSaharTeamParamter(countWomen,countMen,countPP,countPR,count,id);
            if(!result || result.errors) createHttpError.NotAcceptable(parameterMessage.NotFound);;    
            return res.json({
                message:parameterMessage.RequestProcessForAddingToSahabTeam
            });
        } catch (error) {
            next(error);
        }
    }
    async addvolunteries(req, res,next) {
    try {
        const id=req.user._id;
        const {name}=req.body;
        const result = await this.#service.addVolunteriesParamter(id,name);
        return res.json({
            message:parameterMessage.AddingVolunterName,
            result:result,
        }); 
    } catch (error) {
        next(error);
     }
    }
    async addPersonel(req, res,next) {
    try {
        const id=req.user._id;
        const {name}=req.body;
        const result = await this.#service.addPersonelParamter(id,name);
        return result.json({
            message:parameterMessage.AddingPersonelName,
            result:result,
        });
    } catch (error) {
        next(error);
    }
    }

    async conformationPrarmter(req, res,next) {
        try {

            const {id}=req.body;
            const result = await this.#service.conformationPrarmter(id);
            return result.json({
                message:parameterMessage.isConfirmation,
                result:result,
            });
        } catch (error) {
            next(error);
        }
    }
    
}
module.exports = new parameterController();