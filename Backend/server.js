const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./models/register') 

const dbUrl = "mongodb+srv://niksin:lZZHTwcZaLK7NheR@cluster.6p3jxm7.mongodb.net/?retryWrites=true&w=majority"


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.set("strictQuery", true);
mongoose.connect(dbUrl, connectionParams)
.then(()=>{
    console.info("Connected to DB")
}).catch((e)=>{
    console.log("Error => ",e);
});

const app = express()

app.get("/",(req,res)=>{
    console.log(req)
    res.send("<h1>hello</h1>")
})

app.get("/register",async (req,res)=>{
    try{
    const detail = { name: "NA",email:"NA",address:"NA",contact:"NA" }
    const usr = new userModel(detail)
    const adnew = await usr.save();
    res.send({ msg: "signup successful redirect to the login page" })
    console.log("Success")
    // userModel.save((err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         res.status(200).send({"msg":"inserted to db"})
    //     }
    // })
    }
    catch{
        res.status(400).send({ msg: "email is already register"});
    }
})



app.listen(5000,()=>{
    console.log('server is started at 5000')
});