const mongoose = require('mongoose')
const interviewModelSchema = new mongoose.Schema({
    interviewDate : {
        type:String,
        required:true,
    },
	interviewTime :{
		type:Number,
        required:true,
	},
	interviewerName:{
		type:String,
		required:true,
	},

	studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
	interviewId:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'interview'
	}
  
})
interviewModelSchema.set('timestamps',true)
module.exports=mongoose.model('interview',interviewModelSchema)
