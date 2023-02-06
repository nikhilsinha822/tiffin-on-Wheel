const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||5000;
//require('./auth');
const cors = require("cors")
require("./connection/conn")
app.set("view engine",'ejs');
const path = require("path");
const cookie = require("cookie-parser");
app.use(cookie()); 
const static1 = path.join(__dirname,"/views")
app.use(express.static(static1));
app.set("view engine", "ejs");
const login =  require("./routes/login")
//const google =  require("./routes/google")
const main =  require("./routes/waremanage")
const payment = require("./routes/payment");
const bussiness = require('./routes/bussiness');
const shiping = require('./routes/shiping');

app.use(cors())


app.use("/",login);
app.use("/",payment);
app.use("/",main);
app.use("/",bussiness);
app.use("/",shiping);


app.listen(port,()=>console.log("server is up....."));
