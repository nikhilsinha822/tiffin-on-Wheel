const express = require("express");
const router = express.Router();
const schema = require("../model/payment")
const Razorpay=require("razorpay");
var instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});
const isLoggedIn = require("../middleware/middleware")


    
router.post('/create/orderid',isLoggedIn, async (req, res) => {
    try{
    let options = {
      amount:req.body.amount,  // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    instance.orders.create(options, async function(err, order) {
      console.log(order);
     res.send({orderId:order.id})
     
    });
}
catch{
    res.status(400).send(e);
  }
  
  })
  router.post("/api/payment/verify" ,isLoggedIn,async (req,res)=>{
    try{
    let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256',process.env.KEY_SECRET)
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.razorpay_signature)
     
   {
    const detail = {email:req.email,number:req.number,payment_status:true,razorpay_signature:true,razorpay_payment_id:req.body.razorpay_payment_id,date:Date(),};
    const usr = new schema(detail)
    const adnew = await usr.save();
    res.send({msg:true})
   }
        else 
       { const detail = {email:req.email,number:req.number,payment_status:false,razorpay_signature:false,razorpay_payment_id:req.body.razorpay_payment_id,date:Date(),};
       const usr = new schema(detail)
       const adnew = await usr.save();  
       res.send({msg:false});
  }
     
    
}

catch{
    res.status(400).send(e);
  }
     });

    module.exports=router;
