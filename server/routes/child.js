const Router = require('express')
const router = new Router()
const ChildController = require('../controller/childController')
const checkRole = require('../middleware/role-middleware')

router.post('/post',checkRole('Адміністратор'), ChildController.post)
router.get('/getbygroup', ChildController.getbygroup)
router.get('/getone', ChildController.getone)
router.put('/put',checkRole('Адміністратор'), ChildController.put)
router.delete('/delete',checkRole('Адміністратор'), ChildController.delete)


module.exports = router