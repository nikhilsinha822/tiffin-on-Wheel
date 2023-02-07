const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    razorpay_payment_id:String,
    vender_number:Number,
    vender_email:String,
    order_otp:Number,
    date:Date,
    delivery_status:Boolean 
  });
  

  module.exports =  mongoose.model("tiffin_delivery_detail", userSchema); 