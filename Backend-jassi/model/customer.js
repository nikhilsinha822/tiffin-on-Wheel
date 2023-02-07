const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:[true,"email already exist"]
    },
    email_status:Boolean,
      address:Object,
      number:Number,
      otp:Number,
    
    
        
  });
  

  module.exports =  mongoose.model("tiffing_custumer", userSchema); 