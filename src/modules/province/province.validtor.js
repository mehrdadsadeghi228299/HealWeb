const { body } = require('express-validator');
const { ProvinceMessageValidotr } = require('./province.message');

const validatorProvince=[
    body('name').notEmpty().trim().isString().toLowerCase().withMessage(ProvinceMessageValidotr.Name),
    body('owner').notEmpty().trim().isString().toLowerCase().withMessage(ProvinceMessageValidotr.owner),
    body('count').notEmpty().trim().isNumeric().withMessage(ProvinceMessageValidotr.count),
    body('men').notEmpty().trim().isMongoId().withMessage(ProvinceMessageValidotr.men),
    body('city').notEmpty().trim().isMongoId().withMessage(ProvinceMessageValidotr.CityId),

]
module.exports={
    validatorProvince
}
