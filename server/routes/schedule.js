const Router = require('express')
const router = new Router()
const scheduleController = require('../controller/scheduleController')
const checkRole = require('../middleware/role-middleware')

router.post('/post',checkRole('Адміністратор'),scheduleController.post)
router.get('/getgroup',scheduleController.getgroup)
router.get('/getgroupday',scheduleController.getgroupday)
router.put('/change',checkRole('Адміністратор'),scheduleController.put)
router.delete('/delete',checkRole('Адміністратор'),scheduleController.delete)


module.exports = router