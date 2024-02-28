const { body } = require('express-validator');
const { MessageValidotr } = require('./person.message');

const validatorUser=[
    body('name').notEmpty().trim().isString().toLowerCase().withMessage(MessageValidotr.Name),
    body('lastName').notEmpty().trim().isString().toLowerCase().isLength({min:3,max:15}).withMessage(MessageValidotr.lastName),
    body('personlId').notEmpty().trim().isNumeric().isLength({min:6,max:8}).withMessage(MessageValidotr.personlId),
    body('codeMeeli').notEmpty().trim().isNumeric().isLength({min:9,max:12}).withMessage(MessageValidotr.codeMeeli),
    body('email').isEmail().normalizeEmail().notEmpty().withMessage(MessageValidotr.email),
    body('password').notEmpty().isString().isLength({min:6 ,max:15}).trim().withMessage(MessageValidotr.password),
    body('mobile').notEmpty().isNumeric().isMobilePhone('ir-IR').withMessage(MessageValidotr.mobile),
    body('accessLevel').notEmpty().isString().withMessage(MessageValidotr.accessLevel),
    body('rule').notEmpty().isString().withMessage(MessageValidotr.rule),
    body('subProvince').notEmpty().isString().isLength({min:10}).withMessage(MessageValidotr.subProvince),
    body('province').notEmpty().isString().isLength({min:10}).withMessage(MessageValidotr.province),
    body('descriptionForupdate').notEmpty().isString().isLength({min:10}).withMessage(MessageValidotr.descriptionForupdate),
    body('CityId').notEmpty().trim().isMongoId().withMessage(MessageValidotr.CityId),

]
module.exports={
    validatorUser
}
