const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const collageSchema = mongoose.Schema({

name:{
    type:String,
    required:true,
    lowercase: true,
    unique: true,
    trim:true
},
fullName:{
    type:String,
    required:true,
    lowercase: true,
    trim:true
},
logoLink:{
    type:String,
    required:true,
},
isDeletd:{
    type:Boolean,
    default:false

}
},{timestamps:true})

const collagemodel = mongoose.model('Collage', collageSchema)

module.exports = collagemodel