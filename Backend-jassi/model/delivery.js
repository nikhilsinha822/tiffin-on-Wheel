const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    razorpay_payment_id:String,
    number:Number,
    email:String,
    address:String,
    otp:Number,
    date:Date,
    item:String,
    order_status:String
        
  });
  

  module.exports =  mongoose.model("tiffin_delivery", userSchema); 