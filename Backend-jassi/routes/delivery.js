const express = require("express");
const router = express.Router();
const schema = require("../model/customer")
const payment = require("../model/payment")
const order = require("../model/delivery")
const mail= require("../nodemailer/mail") 
const isLoggedIn = require("../middleware/middleware")


    router.post("/booking",isLoggedIn, async(req,res)=>{
        try{ 
            const address = await schema.findOne({email:req.email})
            const otp = mail(req.email,address.address,req.body.ammount,req.body.item)
           const detail = await payment.findOne({razorpay_payment_id:req.body.razorpay_payment_id})
                if(detail.payment_status)
                {
                    const adnew={
                        razorpay_payment_id:req.body.razorpay_payment_id,
                        number:req.body.number,
                        email:req.body.email,
                        payment_ammount:req.body.ammount,
                        address:address.address,
                        otp:otp,
                        date:Date(),
                        item:req.body.item
                        }
                const usr = new order(adnew)
               const data= await usr.save();
               res.send(data)  ;    
                }
                else
                {
                    res.send({msg:false,mark:"have not access to book"})
                }
        }
        catch (e) {
            res.status(400).send(e);
          }
    })
    router.post("/booking/visit",isLoggedIn,(req,res)=>{
        res.send(req.email);  
})


    module.exports=router;
