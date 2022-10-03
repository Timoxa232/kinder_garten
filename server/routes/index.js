const Router = require('express')
const router = new Router()
const dairyRouter = require('./dairy')
const employeeRouter = require('./employee')
const groupRouter = require('./group')
const parentRouter = require('./parent')
const scheduleRouter = require('./schedule')
const subjectRouter = require('./subject')
const childRouter = require('./child')

router.use('/dairy', dairyRouter)
router.use('/employee',employeeRouter)
router.use('/group',groupRouter)
router.use('/parent',parentRouter)
router.use('/schedule',scheduleRouter)
router.use('/subject',subjectRouter)
router.use('/child',childRouter)



module.exports = router