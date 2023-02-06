const express = require("express");
const router = express.Router();
const product = require("../model/product")
const bodyParser= require("body-parser") 
const isLoggedIn = require("../middleware/middleware");
const admin = require("../model/admin");


    router.post("/request/admin", async (req,res)=>{
        let adm = await admin.find({})
        adm=adm.requests[adm.requests.length-1]

        //calculated price

        res.send(adm);
    })

    router.post("/request/verification", async (req,res)=>{

        const request = req.body.request

        if(request===true)
        {
            res.send("verified")
        }
        else
        res.send("not verified");
    })

    module.exports=router;
