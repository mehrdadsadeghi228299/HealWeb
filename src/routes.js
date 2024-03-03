const { AuthRouter } = require('./modules/auth/auth.routes')
const {CityRouter} = require('./modules/city/city.router')
const {parameterRouter} = require('./modules/parameter/parameter.router')
const { UserRoutes } = require('./modules/person/person.router')
const { ProvinceRouter } = require('./modules/province/province.router')

const router = require('express').Router()

router.use("/auth",AuthRouter);
router.use("/user",UserRoutes);
router.use("/province",ProvinceRouter);
router.use("/city",CityRouter);
router.use("/city",CityRouter);
router.use("/paramters",parameterRouter);


module.exports ={
    AllRoutes:router
}