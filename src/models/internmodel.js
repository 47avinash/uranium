const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const { stringify } = require('nodemon/lib/utils');


const internSchema = mongoose.Schema({
  name : {
      type: String,
      required:true,
  },
  email:{
      type:String,
      required:true,
      unique:true,
      isAsnyc: true
  },

  mobile:{
      type:Number,
      required:true,
  },
  collegeId:{
    type: ObjectId,
    ref: "collage",
     required: true
  },

  isDeleted:{
      type:Boolean,
      default:false
  }
},{ timestamps: true })

const interModel = mongoose.model('intern', internSchema)
module.exports = interModel