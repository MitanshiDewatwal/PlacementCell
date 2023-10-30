const express = require ('express')
const router = express.Router()
const interview = require ('../controllers/interviewController')


router.post("/interview/:id",interview.scheduleInterview)
router.get("/interview/:id",interview.interviewStudentDetails)


module.exports = router;