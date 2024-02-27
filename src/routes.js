const { AuthRouter } = require('./modules/auth/auth.routes')
const { UserRoutes } = require('./modules/person/person.router')

const router = require('express').Router()

router.use(AuthRouter)
router.use(UserRoutes)
//router.use(ProvinceRouter)


module.exports ={
    AllRoutes:router
}