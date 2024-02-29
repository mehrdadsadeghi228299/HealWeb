const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const provinceService = require("./province.service");
const { ProvinceMessage } = require("./province.message");
class ProvinceController {
    #service;
    success_message;
    constructor () {
        autoBind(this);
        this.#service = provinceService;
    }
    async createProvince (req, res, next) {
        try {
            const errorValidator = validationResult(req);
            if (!errorValidator) {
                return res.status(HttpStatus.NOT_IMPLEMENTED).json({
                    statusCodes: HttpStatus.NOT_IMPLEMENTED,
                    message: errorValidator
                });   
            }            const {owner,name,count,men,city} = req.body;

            const result =await this.#service.createProvince({owner,name,count,men,city});
            return res.json({
                message:ProvinceMessage.Created,
                 result:result
            });
                } catch (error) {
            next(error);
        }
    }

    async findMyProvince (req, res, next) {
       try {
        const {name} = req.params;
        const result =await this.#service.findMyProvince(name);
        return res.json({
            message:ProvinceMessage.SERACH,
             result:result
        });
       } catch (error) {
        next(error);
       }
    }
    async addCity (req, res, next) {
        try {
            const {name,cityId} = req.body;
            const result =await this.#service.addCity(name,cityId);
            return res.json({
                message:ProvinceMessage.UPDATE,
                 result:result
            });
           } catch (error) {
            next(error);
           } 
    }
    async removeProvince(req, res, next) {
        try {
        /**
         * Level 2
         */
        } catch (error) {
         next(error);
        }
    }
    async showProvince (req, res, next) {
        try {
            const {name} = req.params;
            const result =await this.#service.showProvince(name);
            return res.json({
                message:ProvinceMessage.SERACH,
                 result:result
            });
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