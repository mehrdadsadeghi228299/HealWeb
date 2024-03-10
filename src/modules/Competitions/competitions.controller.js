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
        const title=req.params.title;
        const result = await this.#service.findByCompetitionsTitle(title);
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
            const name = req.params.name;
            const result = await this.#service.findCompetitionsByNameVolunter(name);
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

            const {title,name} = req.body;
            const result = await this.#service.chooseWinner(name,title,id);
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