const mongoose = require('mongoose')

const { Schema } = mongoose;

const driverSchema = new Schema({
  name: {
    type: String
  },
  driver_id:{
    type:Number
  },
  email:{
    type:String
  },
  phone_number:{
    type:Number
  },
  assigned_cab:{
    unique:true,
    type:[String]
  }

});


const Driver = mongoose.model('DRIVER', driverSchema)

module.exports = Driver