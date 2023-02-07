const nodemailer = require("nodemailer")

function mail( email,address,ammount,item)
{
   const random = Math.floor(Math.random() * 99999) + 10000;
  
  console.log(random);
 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: "jkstar0123@gmail.com",
     pass: process.env.EMAIL_PASS,
   }
 })
 var mailOptions = {
  from: 'jkstar0123@gmail.com',
  to: `${email}`,
  subject: 'registor email verification',
  text: `Thank for placing order with ammount ${ammount}
   your order password id ${random},
  share  it only with our deliver boy,
  your given address is ${address}
  where ${item} would be delivered`
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

return random;
}
module.exports=mail;