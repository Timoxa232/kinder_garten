const { Router } = require('express')
const router = new Router()
const subjectController = require('../controller/subjectController')
const checkRole = require('../middleware/role-middleware')

router.post('/post', checkRole(), subjectController.post)
router.put('/put', checkRole(), subjectController.put)
router.get('/get', subjectController.get)
router.delete('/delete', checkRole('Адміністратор'), subjectController.delete)


module.exports = router