const { AuthRouter } = require('./modules/auth/auth.routes')

const router = require('express').Router()

router.use(AuthRouter)
//router.use(PersonRoutes)
//router.use(ProvinceRouter)


module.exports ={
    AllRoutes:router
}