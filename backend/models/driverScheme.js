const mongoose = require('mongoose')

const { Schema } = mongoose;

const driverSchema = new Schema({
  name: {
    type: String
  }
});


const Driver = mongoose.model('DRIVER', driverSchema)

module.exports = Driver