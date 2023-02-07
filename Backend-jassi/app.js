const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||5000;
require('./auth');
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
const google =  require("./routes/google")
const main =  require("./routes/main");
const payment = require('./routes/payment');
const whitelist = ['chrome-untrusted://new-tab-page', 'https://www.google.com', 'https://127.0.0.1:5500','http://localhost:3500','http://localhost:5000'];
const corsOption = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true) 
        } else {
            callback(new Error('Not allowed by cors'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))
app.use(cors())


app.use("/",login);
app.use("/",google);
app.use("/",main);
app.use("/",payment);


app.listen(port,()=>console.log("server is up....."));
