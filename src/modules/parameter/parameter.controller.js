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
        const result = await this.#service.createparameter({num1,num2,num3,num4,num5,num6,num7,num8,num9},userId);
        return res.json({
            message:parameterMessage,

        })
     } catch (error) {
        next(error);
     }

    }
    async findMyparameterANDShow(city) {

    }
    async AddSahabTeam(req,res,next) {
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
    async AddSaharTeam(req,res,next) {
        try {
            const {id_paramters,sahabTeam} = req.body;
            const result = await this.#service.AddSaharTeam(id_paramters,sahabTeam);
            return res.json({
                message:parameterMessage.RequestOK+ "upadte was successfully",
                
            });
        } catch (error) {
            next(error);
        }

    }


    async checkExistCity(name){


    }
}

module.exports = new parameterController();