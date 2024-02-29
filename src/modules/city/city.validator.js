const { body } = require('express-validator');
const { MessageValidotr } = require('./person.message');

const validatorUser = [
    body('name').notEmpty().trim().isString().toLowerCase().withMessage(MessageValidotr.Name),
    body('title').notEmpty().trim().isString().toLowerCase().isLength({min:3,max:15}).withMessage(MessageValidotr.lastName),
    body('description').notEmpty().trim().isNumeric().isLength({min:6,max:8}).withMessage(MessageValidotr.personlId),
    body('lat').notEmpty().trim().isNumeric().withMessage(MessageValidotr.codeMeeli),
    body('lng').notEmpty().trim().isNumeric().withMessage(MessageValidotr.codeMeeli),

]
module.exports={
    validatorUser
}
