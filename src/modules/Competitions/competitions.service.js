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
            nameVolunter:name,
            description:description,
            informationofVolunter:information,
            cityname:cityname,
            city:cityAnwser._id,
            images:images
        });
        return result._id.toString();

       
    }
    async findByCompetitionsTitle(title) {
        return await this.checkExistCompetitions(title)

    }
    async findCompetitionsByCity(city) {
        const result = await this.#model.find({cityname:city});
        if(!result) return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 
    }   
     async findCompetitionsByNameVolunter(name) {
        const result = await this.#model.find({nameVolunter:name});
        if(!result) return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 
    }
    async chooseWinner(name,title,id) {
        console.log(name,title);
        const result = await this.#model.updateMany({nameVolunter:name,titleCompetitions:title},{
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
        const result = await this.#model.find({titleCompetitions:name});
        if(!result)  return createHttpError.NotFound(CompetitionsMessage.NotFound);
        return result 

    }
}

module.exports = new CompetitionsService();