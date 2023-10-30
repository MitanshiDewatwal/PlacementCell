const mongoose = require('mongoose')
const employeeModelSchema = new mongoose.Schema({
    employeeName : {
        type:String,
        required:true,
    },
   employeeEmail : {
        type: String,
        required:true,
    },
    password : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    phoneNo : {
        type : Number,
        required : true,
    },
   
    isActive : {
        type : Boolean,
        required : true,
        default : true,
    },
})
employeeModelSchema.set('timestamps',true)
module.exports=mongoose.model('employee',employeeModelSchema)
