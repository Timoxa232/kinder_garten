const Router = require('express')
const router = new Router()
const employeeController = require('../controller/employeeController')
const { registerValidation } = require('../validators/authEmployee')
const { loginValidation } = require('../validators/loginEmployee')
const { validationMiddleware } = require('../middleware/validations-middleware')
const authMiddleware = require('../middleware/auth-middleware')
const checkRole = require('../middleware/role-middleware')

router.post('/registration', registerValidation, validationMiddleware, employeeController.registration)
router.post('/login', loginValidation, validationMiddleware, employeeController.login)
router.get('/check',authMiddleware, employeeController.check)
router.get('/get', employeeController.get)
router.get('/getfired', employeeController.getfired)
router.get('/getone', employeeController.getone)
router.put('/:id', employeeController.put)



module.exports = router