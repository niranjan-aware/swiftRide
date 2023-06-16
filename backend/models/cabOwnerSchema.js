const mongoose = require('mongoose')

const { Schema } = mongoose;

const cabOwnerSchema = new Schema({
  name: {
    type: String
  }
});


const cabProvider = mongoose.model('CABPROIDVER', cabOwnerSchema)

module.exports = cabProvider