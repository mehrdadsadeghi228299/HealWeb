const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const parameterService = require("./parameter.service");
class parameterController{
    #service;
    constructor () {
        autoBind(this);
        this.#service =parameterService ;
    }
    async createparameter(dto) {
        const {userId}=req.user;
        

    }
    async findMyparameterANDShow(city) {

    }
    async Addparamters(id_paramters,nameCity) {

    }
    async showParameters(city) {
    }

    async checkExistCity(name){


    }
}

module.exports = new parameterController();