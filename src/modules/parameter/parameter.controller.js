const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const parameterService = require("./parameter.service");
const { parameterMessage } = require("./parameter.message");
class parameterController{
    #service;
    constructor () {
        autoBind(this);
        this.#service =parameterService ;
    }
    async createparameter(req, res, next) {
     try {
        const userId=req.user._id;
        const {num1,num2,num3,num4,num5,num6,num7,num8,num9}=req.body;
        await this.#service.createparameterService({num1,num2,num3,num4,num5,num6,num7,num8,num9},userId);
        return res.json({
            message:parameterMessage.CreatedParameters,

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
}
module.exports = new parameterController();