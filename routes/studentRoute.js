const express = require('express')
const router = express.Router()
const student = require('../controllers/studentController')

router.post("/addstudent",student.addStudent)

module.exports = router;