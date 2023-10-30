const express = require ('express')
const router = express.Router()
const employeeRoutes = require ('./employeeRoutes')
const studentRoutes = require('./studentRoute')
const interviewRoutes = require('./interviewRoute')



router.use('/employee',employeeRoutes)
router.use('/student',studentRoutes)
router.use('/interview',interviewRoutes)


module.exports=router;