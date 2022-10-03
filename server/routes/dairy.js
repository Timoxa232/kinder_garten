const Router = require('express')
const router = new Router()
const DairyController = require('../controller/dairyController')
const checkRole = require('../middleware/role-middleware')

router.post('/post', DairyController.post)
router.get('/getchild', DairyController.getchild)
router.get('/getchildday', DairyController.getchildday)
router.get('/getchildweek', DairyController.getchildweek)
router.get('/getchildmonth', DairyController.getchildmonth)
router.put('/:id', DairyController.put)



module.exports = router