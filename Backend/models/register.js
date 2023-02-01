  const mongoose = require('mongoose')

  const userModel = new mongoose.Schema({
    
        name:{
            type:String,
            required:true,
            trim: true,
        },
        contact:{
            type:Number,
            required:true,
            trim: true,
            unique:[true,"contact already exist"]
        },
        address:{
            type:String,
            required:true,
            trim: true,
        }, 
        email:{
            type:String,
            required:true,
            unique:[true,"email already exist"]
        }
})

module.exports = mongoose.model('user',userModel)