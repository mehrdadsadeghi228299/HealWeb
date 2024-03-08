const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { ProvinceModel } = require("./province.model");
const { ProvinceMessage } = require("./province.message");
const { PersonModel } = require("../person/person.model");
const { CityModel } = require("../city/city.model");
class ProvinceService{
    #model;
    #usermodel;
    #city;
    constructor () {
        autoBind(this);
        this.#model = ProvinceModel;
        this.#usermodel = PersonModel;
        this.#city = CityModel;
        }
    async createProvince (dto) {
        const newProvince = await this.#model.create(dto);
        if(newProvince.errors || !newProvince) return createHttpError.NotAcceptable(ProvinceMessage.BADVALUE);
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
    async showProvince (id,name) {
        const newProvince = await this.#model.find({name:name}).populate('city');
        //const provincewithParamter=await this.#city.find({})
        if(!newProvince) return createHttpError.NotFound(ProvinceMessage.BADVALUE);
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
        if(newProvince) return createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newProvince;
        //{path:'paramters',populate:'city'}       
    }         
    async getcityWithParamterAsId(id) {
        const user = await this.#usermodel.findById(id,{CityId:1,subProvince:1}).populate("subProvince");
        const city = await this.#city.find({_id:user.CityId}).populate('paramters');
        if(!city || city.errors) return createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return city; 
    }    
    async getcityWithParamter(id,name) {
        const user = await this.CheckYourLevelInPorince(id,name)
        const city = await this.#model.findById(user.province);
        const c=city.city.map(({_id})=> _id );
        const newCity=await this.#city.find({_id:{$in:c}}).populate('paramters');
        if(!newCity) return createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newCity; 
    }  
    async getcityWithParamterAggretion(name) {
        const newCity = await this.#model.aggregate([
           { 
            $match:{ 
                name: name 
            }
        },
        { $lookup:{ from: 'city', localField: 'city', foreignField: '_id', as: 'city' 
        }
            },        
            {
                $unwind: "$citymodel"
            },

        { 
            $project:{
                __v:0
            }
        },

        ]);
        if(!newCity) createHttpError.NotFound(ProvinceMessage.BADVALUE);
        return newCity;
    }
    async CheckYourLevelInPorince(id,name){
        const user = await this.#usermodel.findById(id).populate('province');
        if(!user) return createHttpError.NotFound(ProvinceMessage.NotFound);
        if(user.province==name) return createHttpError.NotFound(ProvinceMessage.YourInput);
        return user;

    }
    async getEveryThings(){
        const result =await this.#model.find().populate('city');
        return result
    }
}

module.exports = new ProvinceService();