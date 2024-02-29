const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const cityService = require("./city.service");
const { validationResult } = require("express-validator");
const { HttpStatusCode } = require("axios");
const { CityMessage } = require("./city.message");
class CityController {
    #service;
    constructor () {
        autoBind(this);
        this.#service = cityService;
    }
    async createCity(req, res, next) {
        try {
            const errorValidator = validationResult(req);
            if (!errorValidator) {
                return res.status(HttpStatusCode.NotImplemented).json({
                    statusCodes: HttpStatusCode.NotImplemented,
                    message: errorValidator
                });   
            }
           const {title,name,description,lat,lng,key}=req.body;
           const result = await this.#service.createCity({title,name,description,lat,lng,key});
           return res.json({
            message:CityMessage.Created,
            result:result
           });

        } catch (error) {
            next(error);
        }
    }

    async findMyCityANDShow(req, res, next) {
       try {
        const city=req.params.city;
        const result = await this.#service.findMyCityANDShow(city);
        return res.json({
            message : CityMessage.Created,
            result : result

           });
       } catch (error) {
        next(error);
       }
    }
    async Addparamters(req, res, next) {
        try {
        const {id_paramters,nameCity}=req.body;
        const result = await this.#service.Addparamters(id_paramters,nameCity);
        
        return res.json({
            message : CityMessage.IdOfParameter,
            result : result

           });
        } catch (error) {
         next(error);
        }
    }
    async showParameters(req, res, next) {
        try {
            const city=req.body.city;
            const result = await this.#service.showParameters(city);
            return res.json({
                message : CityMessage.RequestOK,
                result : result
    
               });
        } catch (error) {
            next(error)
        }
    }
    async postCity(req, res, next) {
        try {
            
        } catch(error) {
            next(error)
        }
    }
}

module.exports = new CityController();