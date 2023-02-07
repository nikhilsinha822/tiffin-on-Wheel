const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    number:Number,
    email:String,
    orderid:String,
    payment_status:Boolean,
    razorpay_signature:Boolean,
    razorpay_payment_id:String,
    date:Date,    
  });
   

  module.exports =  mongoose.model("tiffin_payment", userSchema); 