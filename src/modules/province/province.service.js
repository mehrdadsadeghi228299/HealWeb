const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { ProvinceModel } = require("./province.model");
const { ProvinceMessage } = require("./province.message");
const { PersonModel } = require("../person/person.model");
class ProvinceService{
    #model;
    #usermodel;
    constructor () {
        autoBind(this);
        this.#model = ProvinceModel
        this.#usermodel=PersonModel;
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
    async CalcauteCountryLevelProvince (id) {
        const user= await this.#usermodel.findById(id).populate('ProvinceParameters');
        user.city
        const result=await this.checkProvinceExists(id);
    }
    async CalcauteProvinceLevel(id) {
        const user = await this.#usermodel.findById(id,{province:1});
        const province = await this.#model.findById(user.province,{provinceParameters:1}).populate('provinceParameters');
        const fe=(item)=>{
            return [item.num1,item.num2,item.num3,item.num4,item.num5,item.num6,item.num7,item.num8,item.num9]
        }
        const allNum = province.provinceParameters.map(fe);
        const array=[];
        for (const iterator of allNum) {
            console.log(iterator);
            for (const it of iterator) {
                console.log(it);
                array.push(it);
            }
        }
        const fa =(matrix)=>{
            let rows =2;
            let cols =8; 
            let total =[];
            for (let i in rows){
                for (let j in cols) {
                  total +=rows[i][j];
                  console.log(total);
                }
            }
        }
        const result = fa(allNum)
        console.log(result);
        console.log(array);
        return allNum 

    }
    async checkProvinceExists (name) {
        const newProvince = await this.#model.findOne({name});
        if(newProvince) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return  newProvince;

    }
}

module.exports = new ProvinceService();