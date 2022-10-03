const Router = require('express')
const router = new Router()
const groupController = require('../controller/groupController')
const checkRole = require('../middleware/role-middleware')

router.post('/post',checkRole('Адміністратор'),groupController.post)
router.get('/get',groupController.get)
router.put('/change',checkRole('Адміністратор'),groupController.put)
router.delete('/delete',checkRole('Адміністратор'),groupController.delete)


module.exports = router