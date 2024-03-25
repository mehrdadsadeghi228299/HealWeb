const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const {  parameterMessage } = require("./parameter.message");
const { PersonModel } = require("../person/person.model");
const { PersonMessage } = require("../person/person.message");
const { ParametersModel } = require("./parameter.model");
const { ProvinceModel } = require("../province/province.model");
const { CityModel } = require("../city/city.model");
class parameterService {
    #model;
    #usermodel;
    #provincemodel;
    #citymodel;
    constructor () {;
        autoBind(this);
        this.#model = ParametersModel ;
        this.#usermodel = PersonModel ;
        this.#provincemodel = ProvinceModel ;
        this.#citymodel = CityModel ;
    }
    async createparameterService(dto,userId) {
        const user = await this.#usermodel.findById(userId);
        if(!user) return createHttpError.MethodNotAllowed(PersonMessage.NotFound);
        const provincevar = user.province;
        const cityvar = user.subProvince;
        const date=new Date();
        console.log(provincevar,cityvar,userId);
        const newparameters = await this.#model.create({
            province:provincevar,
            city:cityvar,
            user:userId,
            date:date,
            num1:dto.num1,
            num2:dto.num2,
            num3:dto.num3,
            num4:dto.num4,
            num5:dto.num5,
            num6:dto.num6,
            num7:dto.num7,
            num8:dto.num8,
            num9:dto.num9,
            isMayor:dto.isMayor || false,
            ishealPrvince:dto.ishealPrvince || false,
            isCountry:dto.isCountry || false ,
            iscity: dto.iscity || false , 
            who : dto.who
        });
        user.paramters= newparameters._id;
        await user.save();
        await this.#provincemodel.updateOne({_id:provincevar.toString()},{
            $push:{provinceParameters:newparameters._id}
        });
        await this.#citymodel.updateOne({_id:cityvar.toString()},{
            $push:{paramters:newparameters._id}
        });
        return "success"; 

    }
    async updateparameterService(dto,id,userId) {
        const user = await this.#usermodel.findById(userId);       
        const parameters = await this.#model.updateMany({_id:id},{
            num1:dto.num1,
            num2:dto.num2,
            num3:dto.num3,
            num4:dto.num4,
            num5:dto.num5,
            num6:dto.num6,
            num7:dto.num7,
            num8:dto.num8,
            num9:dto.num9,  
        }) 
        
        return "success"; 

    }
    async findMyparameterANDShow(city) {
        const parametersCity = await this.#model.find({city:city});
        if(!parametersCity|| parametersCity.error) createHttpError.NotAcceptable(parameterMessage.CityNotFound);
        return parametersCity;
    }
    async conformationPrarmter(id){
    const result = await this.#model.updateOne({_id:id},{
        isConfirmation:true
    });
    return result.json();
    }
    async checkExistCity(name){
        const result = await this.#model.findOne({name});
        if(!result) createHttpError.NotFound(parameterMessage.NotFound);
        return   result 

    }
    async addSaharTeamParamter(name,id){
        const extractParamterId= await this.#usermodel.findById(id.toString());   
        const resultForupdate=await this.#model.findById(extractParamterId.paramters.toString());
        resultForupdate.s.push(name);
        return await resultForupdate.save();
         
     }    
    async addSahabTeamParamter(countWomen,countMen,countPP,countPR,count,id){
        const extractParamterId= await this.#usermodel.findById(id.toString());   
        const result = await this.#model.updateMany({_id:extractParamterId.paramters},{
            $set:{
                'b.countWomen':countWomen,
                'b.countMen':countMen,
                'b.countPP':countPP,
                'b.countPR':countPR,
                'b.count':count,
            }
        });

        return await result.save();

     }
     async addVolunteriesParamter(id,name){
        const extractParamterId = await this.#usermodel.findById(id.toString());   
        const result = await this.#model.findById({_id:extractParamterId.paramters});
        result.volunter=name;

        return  await result.save();
     }
     async addPersonelParamter(id,name){
        const extractParamterId = await this.#usermodel.findById(id.toString());   
        const result =await this.#model.findById({_id:extractParamterId.paramters.toString()});
        result.personel=name;
        return await result.save();
     }

}

module.exports = new parameterService();