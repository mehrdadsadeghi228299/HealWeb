const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { ProvinceModel } = require("./province.model");
const { ProvinceMessage } = require("./province.message");
class ProvinceService{
    #model;
    constructor () {
        autoBind(this);
        this.#model = ProvinceModel

        }
    async createProvince (dto) {
        const newProvince = await this.#model.create(dto);
        if(newProvince.errors) createHttpError.NotAcceptable(ProvinceMessage.BADVALUE);
        return newProvince;
    }

    async findMyProvince (name) {
        return await this.checkProvinceExists(name);
    }
    async removeProvince() {
        /**
         * Level 2
         */
    }
    async showProvince (name) {
        const newProvince = await this.#model.findOne({name}).populate('city');
        if(newProvince) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newProvince;
    }
    async addCity(name,cityId) {
        const result=await this.checkProvinceExists(name);
        result.city.push(cityId);
        await result.save();
        return "OK";
    }
    async postProvince () {
   
    }
    async checkProvinceExists (name) {
        const newProvince = await this.#model.findOne({name});
        if(newProvince) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return  newProvince;

    }
}

module.exports = new ProvinceService();