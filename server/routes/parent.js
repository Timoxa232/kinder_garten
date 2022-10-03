const Router = require('express')
const parentController = require('../controller/parentController')
const router = new Router()
const { registerValidation } = require('../validators/authParent')
const { validationMiddleware } = require('../middleware/validations-middleware')
const {loginValidation} = require('../validators/loginParent')
const { registration } = require('../controller/parentController')
const authMiddleware = require('../middleware/auth-middleware')
const checkRole = require('../middleware/role-middleware')

router.post('/registration', registerValidation, validationMiddleware, parentController.registration)
router.post('/login',loginValidation,validationMiddleware, parentController.login)
router.get('/check',authMiddleware, parentController.check)
router.get('/get', parentController.get)
router.get('/getone', parentController.getone)
router.put('/put',checkRole('Адміністратор'), parentController.put)
router.delete('/delete',checkRole('Адміністратор'), parentController.delete)


module.exports = router