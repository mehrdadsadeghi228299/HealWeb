const autoBind = require("auto-bind");
const HttpCodes = require("http-codes");
const createHttpError = require("http-errors");
const { CompetitionsModel } = require("./competitions.model");
const { CompetitionsMessage } = require("./competitions.message");
const { CityModel } = require("../city/city.model");
class CompetitionsService {
    #model;
    #cityModel;
    constructor () {
        autoBind(this);
        this.#model =CompetitionsModel ;
        this.#cityModel = CityModel;
    }
    async createCompetitions(title,name,description,information,cityname,images) {
        console.log(title,name,description,information,cityname,images);

        const check = await this.#model.findOne({nameVolunter:name});
        if(check){
            if(title == check?.titleCompetitions){
                return createHttpError.NotAcceptable(CompetitionsMessage.AlreadyExist);
            }
            return true 
        }
        const cityAnwser = await this.#cityModel.findOne({name:cityname});
        if(!cityAnwser) return createHttpError.NotAcceptable(CompetitionsMessage.NotFound+' City name');
        const result = await this.#model.create({
            titleCompetitions:title,
            nameVolunter:dto.name,
            description:description,
            informationofVolunter:information,
            cityname:cityname,
            city:cityAnwser._id,
            images:images
        });
        return result._id.toString();

       
    }
    async findByCompetitionsTitle(competitions) {
        return await this.checkExistCompetitions(competitions)

    }
    async findCompetitionsByCity(city) {
        const result = await this.#model.findOne({cityname:city});
        if(!result) return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 
    }   
     async findCompetitionsByNameVolunter(namevolunter) {
        const result = await this.#model.findOne({nameVolunter:namevolunter});
        if(!result) return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 
    }
    async chooseWinner(namevolunter,id) {
        const result = await this.#model.updateMany({nameVolunter:namevolunter},{
            wnier:true,
            whoSetWinner:id
        });
        if(!result) return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 
    }
    async showAllCompetitions() {
        return await this.#model.find({}).populate('city');
    }  
    async getAllWiner() {
        return await this.#model.find({wnier:true}).populate('city');
    }

    async checkExistCompetitions(name){
        const result = await this.#model.findOne({titleCompetitions:name});
        if(!result)  return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 

    }
}

module.exports = new CompetitionsService();