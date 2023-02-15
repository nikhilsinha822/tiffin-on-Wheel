const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    razorpay_payment_id:String,
    number:Number,
    email:String,
    payment_ammount:Number,
    address:String,
    otp:Number,
    date:Date,
    item:String,
    picked_status:Boolean 
  });
  

  module.exports =  mongoose.model("tiffin_order", userSchema); 