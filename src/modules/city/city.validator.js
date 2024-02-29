const { body } = require('express-validator');
const { CityMessageValidotr } = require('./city.message');

const validatorCity = [
    body('name').notEmpty().trim().isString().toLowerCase().withMessage(CityMessageValidotr.Name),
    body('title').notEmpty().trim().isString().toLowerCase().isLength({min:3,max:15}).withMessage(CityMessageValidotr.title),
    body('description').notEmpty().trim().isString().isLength({min:6,max:8}).withMessage(CityMessageValidotr.description),
    body('lat').notEmpty().trim().isString().withMessage(CityMessageValidotr.latANDlng),
    body('lng').notEmpty().trim().isString().withMessage(CityMessageValidotr.latANDlng),
    body('key').notEmpty().trim().isNumeric().withMessage(CityMessageValidotr.latANDlng),

]
module.exports={
    validatorCity
}
