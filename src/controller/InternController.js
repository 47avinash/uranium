const mongoose = require('mongoose')
const intern = require("../models/internmodel")
const collage = require("../models/collagemodel")
let validator = require('validator');
//******************************************************************************************************************************************//
const createintern = async (req, res) => {
try{
  let data = req.body
  
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let mobileRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
  
  if(!Object.keys(data).length)
  return res.status(400).send({status:false, message:"you must enter a data to intern"})

  if(!data.name) 
  return res.status(400).send({status:false, message:"you must enter a name"})
  
  
  
  if(!data.email)
  return res.status(400).send({status:false, message:"you must enter a email"})
  if(!data.email.match(emailRegex)) return res.status(400).send({status:false, message:"enter valid email"})


  if(!data.mobile)
  return res.status(400).send({status:false, message:"you must enter a mobile"})
  if(!data.mobile.match(mobileRegex)) return res.status(400).send({status:false, message:"enter valid mobile number"})


  if(!data.collegeId)
  return res.status(400).send({status:false, message:"you must enter a collegeId"})

  if(!await collage.findById(req.body.collegeId))
  return res.status(400).send({status:false, message:"Enter valid college Id"})

  if(await intern.exists(data))
  return res.status(400).send({status:false, message:"student already exist"})

  let created = intern.create(data)
  res.status(201).send({status:true, data:created})



}catch(error){
    console.log(error);
}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getinterns = async function (req, res) {
  let Data = req.query
  /**********Validation**********************/
  if (!Data.collegeName) 
  return res.status(400).send({ status: false, message: "please enter your collage name" })
  
  let getCollege = await collage.findOne({ name: Data.collegeName })
  
  if (!getCollege)
  return res.status(404).send({ status: false, message: "colllage not found" })
  /***********************************/
  let collegeId = getCollege._id
  let findIntern = await intern.find({ collegeId: collegeId, isDeleted: false }).select({ _id: 1, name: 1, email: 1, mobile: 1 })

  return res.status(200).send({
    status: true,
    data: {
        "name": getCollege.name,
        "fullName": getCollege.fullName,
        "logoLink": getCollege.logoLink,
        "interests": findIntern
    }
})
}


module.exports.createintern = createintern

 module.exports.getinterns = getinterns