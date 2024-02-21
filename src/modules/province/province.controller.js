const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
class ProvinceController {
    #service;
    success_message;
    constructor () {
        autoBind(this);
        this.#service = ;
    }
    async createProvince (req, res, next) {
        try {
           
        } catch (error) {
            next(error);
        }
    }

    async findMyProvince (req, res, next) {
       try {
        
       } catch (error) {
        next(error);
       }
    }
    async removeProvince(req, res, next) {
        try {
        
        } catch (error) {
         next(error);
        }
    }
    async showProvince (req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
    async postProvince (req, res, next) {
        try {
            
        } catch(error) {
            next(error)
        }
    }
}

module.exports = new ProvinceController();