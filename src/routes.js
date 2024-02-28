const { AuthRouter } = require('./modules/auth/auth.routes')
const { UserRoutes } = require('./modules/person/person.router')

const router = require('express').Router()

router.use("/auth",AuthRouter)
router.use("/user",UserRoutes)
//router.use(ProvinceRouter)


module.exports ={
    AllRoutes:router
}