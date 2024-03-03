const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
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
        const {userId}=req.user;
        const {num1,num2,num3,num4,num5,num6,num7,num8,num9}=req.body;
        await this.#service.createparameter({num1,num2,num3,num4,num5,num6,num7,num8,num9},userId);
        return res.json({
            message:parameterMessage.,

        });
     } catch (error) {
        next(error);
     }

    }
    async findMyparameterANDShow(req, res,next) {
        try {
            
        } catch (error) {
            next(error);
        }

    }

    async addSaharTeamParamter(req,res,next){
        try {
            const {name,id_parameter}=req.body;
            const {id}=req.user;
            const result = await this.#service.addSaharTeamParamter(name,id);
            if(!result || result.error) createHttpError.NotAcceptable(parameterMessage.NotFound);;    
            return res.json({
                message:result
            });
        } catch (error) {
            next(error);
        }
    }

    async addSahabTeamParamter(req,res,next){
        try {
            const {countWomen,countMen,countPP,countPR,count,id_parameter}=req.body;
            const {id}=req.user;
            const result = await this.#service.addSaharTeamParamter(countWomen,countMen,countPP,countPR,count,id);
            if(!result || result.error) createHttpError.NotAcceptable(parameterMessage.NotFound);;    
            return res.json({
                message:result
            });
        } catch (error) {
            next(error);
        }
    }
/**
 * 
 *     async AddSahabTeam(req,res,next) {
        try {
            const {id_paramters,sahabTeam} = req.body;
            const result = await this.#service.AddSahabTeam(id_paramters,sahabTeam);
            return res.json({
                message:parameterMessage.RequestOK+ "upadte was successfully",
                
            });
        } catch (error) {
            next(error);
        }

    }
    async createSahabTeam(req, res, next) {
        try {
           const {userId}=req.user;
           const {countWomen,countMen,countPP,countPR,count}=req.body;
           const result = await this.#service.createSahabTeam({countWomen,countMen,countPP,countPR,count},userId);
           return res.json({
                message:parameterMessage,
                result:result
            });
        } catch (error) {
           next(error);
        }
   
    }
    async AddSaharTeam(req,res,next) {
        try {
            const {name} = req.body;
            const result = await this.#service.AddSaharTeam(id_paramters,sahabTeam);z
            return res.json({
                message:parameterMessage.RequestOK+ "upadte was successfully",
            });
        } catch (error) {
            next(error);
        }

    }
    async createSaharTeam(req, res, next) {
        try {
           const {userId}=req.user;
           const {name}=req.body;
           const result = await this.#service.createSaharTeam(name,userId);
           return res.json({
               message:parameterMessage,
               result:result
           });
        } catch (error) {
           next(error);
        }
   
    } 
 */

    async checkExistCity(name){


    }
}

module.exports = new parameterController();