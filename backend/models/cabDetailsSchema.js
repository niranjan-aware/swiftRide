const mongoose = require('mongoose')

const { Schema } = mongoose;

const cabDetailsSchema = new Schema({
  cab_registration_number:{
    type:String
  },
  cab_model:{
    type:String
  },
  cab_colour:{
    type:String
  },
  assigned_drivers:{
    type:[String]
  }
});


const cabProvider = mongoose.model('CABDETAILS', cabDetailsSchema)

module.exports = cabProvider