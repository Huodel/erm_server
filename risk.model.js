const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const RiskSchema = new Schema({
  user: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  riskid: {type: String,required: false,unique: false,trim: false,minlength: 0},
  priority: {type: String,required: false,unique: false,trim: false,minlength: 0},
  risk: {type: String,required: false,unique: false,trim: false,minlength: 0},
  riskdescription: {type: String,required: false,unique: false,trim: false,minlength: 0},
  riskmanager: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Risk = mongoose.model("Risk",RiskSchema)

module.exports = Risk;


