const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const provinceService = require("./province.service");
const { ProvinceMessage } = require("./province.message");
const { HttpStatusCode } = require("axios");
const { validationResult } = require("express-validator");
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
                return res.status(HttpStatusCode.NotImplemented).json({
                    statusCodes: HttpStatusCode.NotImplemented,
                    message: errorValidator
                });   
            }           
             const {owner,name,count,men,city} = req.body;

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
            const id = req.user._id;
            const {name} = req.params;
            const result =await this.#service.showProvince(id,name);
            return res.json({
                message:ProvinceMessage.SERACH,
                 result:result
            });
        } catch (error) {
            next(error)
        }
    }
    async CalcauteCountryLevelProvince (req, res, next) {
        try {
            const id=req.user._id;
            const result = await this.#service.CalcauteCountryLevelProvince(id)

        } catch(error) {
            next(error)
        }
    }
    async CalcauteProvinceLevel (req, res, next) {
        try {
            const id=req.user._id;
            const result = await this.#service.CalcauteProvinceLevel(id)
            return res.json({result});
        } catch(error) {
            next(error)
        }
    }
    async getcityWithParamter (req, res, next) {
        try {
            const id = req.user._id;
            const {name}=req.params;
            const result = await this.#service.getcityWithParamter(id,name);
            return res.json({
                message:ProvinceMessage.SERACH,
                 result:result
            });
        } catch(error) {
            next(error)
        }
    }
    async getcityWithParamterAsuserId (req, res, next) {
        try {
            const id=req.user._id;
            console.log(id);
            const result = await this.#service.getcityWithParamter(id);
            return res.json({
                message:ProvinceMessage.SERACH,
                 result:result
            });
        } catch(error) {
            next(error)
        }
    }
    async getEveryThings(req, res,next) {
        try {
            const result = await this.#service.getEveryThings();
            return res.json({
                message:ProvinceMessage.SERACH,
                result:result
            });
            
        } catch (error) {
            next(error);
        }
    }
    async getAllparamter(req, res,next) {
        try {
            const result = await this.#service.getAllparamter();
            return res.json({
                message:ProvinceMessage.SERACH,
                result:result
            });
            
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ProvinceController();