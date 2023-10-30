const express = require ('express')
const router = express.Router()
const employee = require ('../controllers/employeeControllers')


router.post("/signUp",employee.employeeSignUp)
router.post("/login",employee.employeeLogin)

module.exports = router;