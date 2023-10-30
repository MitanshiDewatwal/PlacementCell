const employeeModelSchema = require("../models/employeeModelSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//1 st API employee signup ..................................................................................
const employeeSignUp = async (req, res) => {
    try {
        const isEmailExists = await employeeModelSchema.findOne({ employeeEmail: req.body.employeeEmail });
        if (isEmailExists) {
            res.status(409).json({
                success: "failure",
                message: "This email is already exists"
            });
        }
        else {
            const employeeSignUp = await new employeeModelSchema(req.body)
            const salt = await bcrypt.genSalt(10);
            employeeSignUp.password = await bcrypt.hash(req.body.password, salt);
            try {
              
                employeeSignUp.save();
                res.status(201).json({
                    success: "success",
                    message: "The employee register successfully"
                });
            } catch (err) {
                res.status(400).json({
                    success: "failure",
                    message: "Error occur" + err.message
                });
            }
        }
    }
    catch (err) {
        res.status(400).json({
            success: "failure",
            message: "Error occur" + err.message
        });
    }
}
//2nd API of employee Login.............................................................................................
const employeeLogin = async (req, res) => {
    try {
        const { employeeEmail, password } = req.body;
        if (employeeEmail && password) {
            const employee = await employeeModelSchema.findOne({ employeeEmail: employeeEmail });
            if (employee != null) {
                const isMatch = await bcrypt.compare(password, employee.password);
                if (employeeEmail === employeeEmail && isMatch) {
                    const token = jwt.sign({ employeeId: employee._id }, process.env.jwt_secretKey, { expiresIn: '5d' });
                    res.status(200).send({
                        success: "success",
                        message: "Login Success",
                        "data": employee,
                        "token": token
                    });
                }
                else {
                    res.status(400).send({
                        success: "failure",
                        message: "Email or Password is not valid",
                    });
                }
            } else {
                res.status(400).send({
                    success: "failure",
                    message: " you are not a register User"
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "Error occur" + err.message
        });
    }
};

module.exports = {
    employeeSignUp,
   employeeLogin,
   
}