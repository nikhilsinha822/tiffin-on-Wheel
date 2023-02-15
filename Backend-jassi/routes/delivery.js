const express = require("express");
const router = express.Router();
const schema = require("../model/order")
const delivery = require("../model/delivery")
const isLoggedIn = require("../middleware/vender_middleware")


    router.post("/check/orders",isLoggedIn, async(req,res)=>{
        try{ 
            const details = await schema.find({picked_status:false})
                if(details)
                {
               res.send(details);    
                }
                else
                {
                    res.send({msg:false,mark:"NO booking found"})
                }
        }
        catch (e) {
            res.status(400).send(e);
          }
    })
    router.post("/pick/orders",isLoggedIn, async(req,res)=>{
       
       try{
        const detail  = {
            razorpay_payment_id: req.body.razorpay_payment_id,
            vender_number : req.number,
             vender_email : req.email,
             date:Date(),
             delivery_status:false,
        }
        const usr = new delivery(detail)
        const adnew = await usr.save();
        await schema.updateOne({razorpay_payment_id:req.body.razorpay_payment_id},{picked_status:true})

        res.send(req.email); 
    }
    catch(e)
    {
        res.send(e).status(400)
    } 
})

router.post("/check/picked/orders",isLoggedIn, async(req,res)=>{
       
   try{    
 const details = await delivery.find({vender_email:req.email});

    res.send(details);
   }
   catch(e)
   {
    res.send(e).status(400)
   }  
})



    router.post("/close/orders",isLoggedIn, async(req,res)=>{
       
    try{   

       const razorpay_payment_id  =  req.body.razorpay_payment_id
        
   const otp =  await schema.findOne({razorpay_payment_id:req.body.razorpay_payment_id})
   if(otp.otp=req.body.otp)
   {
    await delivery.updateOne({razorpay_payment_id:razorpay_payment_id},{delivery_status:true});
    res.send({msg:true});  
   }
   else {
    res.send({msg:false})
   }
}
catch(e)
{
    res.send(e).status(400)
}
})




    module.exports=router;
