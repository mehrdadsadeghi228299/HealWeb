const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
class CityController {
    #service;
    success_message;
    constructor () {
        autoBind(this);
        this.#service = ;
    }
    async createCity(req, res, next) {
        try {
           
        } catch (error) {
            next(error);
        }
    }

    async findMyCity(req, res, next) {
       try {
        
       } catch (error) {
        next(error);
       }
    }
    async removeCity(req, res, next) {
        try {
        
        } catch (error) {
         next(error);
        }
    }
    async showCity(req, res, next) {
        try {
            
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