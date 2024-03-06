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
        this.#model = ProvinceModel;
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
        const newProvince = await this.#model.findOne({name:name}).populate('city');
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
        const  sumRowElemens=(matrix) =>{
            var result = [];
            for (var i = 0; i < matrix.length; i++) {
                var rowSum = 0;
                for (var j = 0; j < matrix[i].length; j++) {
                    rowSum += matrix[i][j];
                }
                result.push(rowSum);
            }
        
            return result;
        }      
        var rowSums = sumRowElemens(allNum);
        console.log("جمع خانه‌های هر سطر:", rowSums);  
        const result=await this.checkProvinceExists(id);
    }
    async CalcauteProvinceLevel(id) {
        const user = await this.#usermodel.findById(id,{province:1});
        const province = await this.#model.findById(user.province,{provinceParameters:1}).populate('provinceParameters');
        const fe=(item)=>{
            return [item.num1,item.num2,item.num3,item.num4,item.num5,item.num6,item.num7,item.num8,item.num9]
            }
        const  allNum = province.provinceParameters.map(fe);
        const  sumColumns = (matrix) =>{
            var rows = matrix.length;
            var cols = matrix[0].length || 0;
            var columnSums = new Array(cols).fill(0);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    columnSums[j] += matrix[i][j];
                }
            }
            return columnSums;
        }
        let resultsumColumns = sumColumns(allNum);
        return resultsumColumns 
    }     
    async checkProvinceExists(name) {
        const newProvince = await this.#model.findOne({name});
        if(newProvince) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newProvince;
        //{path:'paramters',populate:'city'}
    }         
    async getcityWithParamter(name) {
        const newCity = await this.#model.findOne({name:name}).populate('city.paramters');
        if(newCity) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newCity; 
    }     
    async getcityWithParamterAggretion(name) {
        const newCity = await this.#model.aggregate(
           { 
            $Math:{ 
                name: name 
            }
        },
        
        { 
            $project:{
                __v:0
            }
        },{

        }
        )
        if(newCity) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newCity;
    }
}

module.exports = new ProvinceService();