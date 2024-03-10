const { body } = require('express-validator');
const {  CompetitionsMessageValidotr } = require('./competitions.message');

const CompetitionsValidator = [
    body('title').notEmpty().trim().isString().toLowerCase().withMessage(CompetitionsMessageValidotr.titleCompetitions),
    body('name').notEmpty().trim().isString().toLowerCase().isLength({min:3,max:20}).withMessage(CompetitionsMessageValidotr.nameVolunter),
    body('description').notEmpty().trim().isString().isLength({min:6,max:100}).withMessage(CompetitionsMessageValidotr.description),
    body('information').notEmpty().trim().isObject().withMessage(CompetitionsMessageValidotr.informationofVolunter),
    body('cityname').notEmpty().trim().isString().withMessage(CompetitionsMessageValidotr.cityname),

]
module.exports={
    CompetitionsValidator
}
