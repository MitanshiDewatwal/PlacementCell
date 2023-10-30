const interviewModelSchema = require("../models/interviewModelSchema")
const studentModelSchema = require("../models/studentModelSchema")
const scheduleInterview= async (req,res) =>{
  const id = req.params.studentId;
  try{
      const interviewAdd = await new interviewModelSchema(req.body)
      
      try{
          const interview= await interviewAdd.save();
          res.status(201).json({
              success:"success",
              message:"Interview post successfully",
          })
      }catch(err){
          res.status(400).json({
              success:"failure",
              message:"Error occur"+err.message,
          });
      }
  }catch(err){
      res.status(400).json({
          success:"failure",
          message:"Error occur"+err.message,
      });
  }
}

const interviewStudentDetails = async (req,res) =>{
  const id=req.params.id;
  try{
      const studentDetail = await interviewModelSchema.findOne({studentId:req.params.id})
     
      .populate({
          path:"studentId",
          select:"name email college status batch "
      }).populate({
          path:"interviewId",
          
      });
      
      res.status(200).json({
          success:"success",
          message : "Here is the details of student",
          studentDetail: studentDetail,
      })
  }catch(err){
      res.status(400).json({
          success:"failure",
          message:"Error occur "+err.message
      });
  }
}
module.exports = {

  scheduleInterview,
  interviewStudentDetails
}


