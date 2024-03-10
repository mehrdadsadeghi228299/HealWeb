const autoBind = require("auto-bind");
const { HttpStatusCode } = require("axios");
const { CompetitionsMessage } = require("./competitions.message");
const competitionsService = require("./competitions.service");
const { validationResult } = require("express-validator");
const utf=require('utf8')
class CompetitionsController {
    #service;
    constructor () {
        autoBind(this);
        this.#service = competitionsService;
    }
    async createCompetitions(req, res, next) {
        try {
            console.log("some ",utf.decode(req.body));
            console.log(req.body.cityname);
            console.debug(req.body.name);

       
            console.log(req.body.title);
            const {title,name,description,information,cityname}=req.body;
            const images = req?.files?.map(image => image?.path?.slice(7));
            const result = await this.#service.createCompetitions(title,name,description,information,cityname,images);
           return res.json({
            message:CompetitionsMessage.Created,
            result:result
           });

        } catch (error) {
            next(error);
        }
    }

    async findByCompetitionsTitle(req, res, next) {
       try {
        const competitions=req.params.competitions;
        const result = await this.#service.findByCompetitionsTitle(competitions);
        return res.json({
            message : CompetitionsMessage.RequestOK,
            result : result

           });
       } catch (error) {
        next(error);
       }
    }
    async findCompetitionsByCity(req, res, next) {
        try {
            const city = req.params.city;
            const result = await this.#service.findCompetitionsByCity(city);
            return res.json({
                message : CompetitionsMessage.RequestOK,
                result : result
    
               });
           } catch (error) {
            next(error);
           }
    }
    async findCompetitionsByNameVolunter(req, res, next) {
        try {
            const namevolunter = req.params.namevolunter;
            const result = await this.#service.findCompetitionsByNameVolunter(namevolunter);
            return res.json({
                message : CompetitionsMessage.RequestOK,
                result : result ,
               });
           } catch (error) {
            next(error);
           }
    }
    async showAllCompetitions(req, res, next) {
        try {
            const result = await this.#service.showAllCompetitions();
            return res.json({
                message : CompetitionsMessage.RequestOK,
                result : result
    
               });
        } catch (error) {
            next(error)
        }
    }
    async chooseWinner(req, res, next) {
        try {
            const id =req.user._id;
            const namevolunter = req.params.namevolunter;
            const result = await this.#service.chooseWinner(namevolunter,id);
            return res.json({
                message : CompetitionsMessage.SetWinner,
                result : result ,
               });
           } catch (error) {
            next(error);
           }
    }
    async getAllWiner(req, res, next) {
        try {
            const result = await this.#service.getAllWiner();
            return res.json({
                message : CompetitionsMessage.RequestOK,
                result : result
    
               });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CompetitionsController();