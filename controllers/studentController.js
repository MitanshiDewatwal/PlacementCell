const studentModelSchema = require('../models/studentModelSchema')

const addStudent = async (req, res) => {
    try{
        const isEmailExists = await studentModelSchema.findOne({email : req.body.email});
        if(isEmailExists){
            res.status(409).json({
                success : "Failure",
                message : "Student email is already exists"
            });
        }else {
            const addStudent = await new studentModelSchema(req.body)
            try{
                addStudent.save();
                res.status(201).json({
                    success : "Success",
                    message : "Student successfully added",
                });
            }catch(err){
                res.status(400).json({
                    success : "failure",
                    message :  err.message
                });
            }
        }
    }catch (err) {
        res.status(400).json({
            success : "failure",
            message : err.message
        })
    }
}

module.exports = {
    addStudent
}