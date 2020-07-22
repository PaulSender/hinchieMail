var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);
var transporter = nodemailer.createTransport({
  host: "whatever.com",
  port: 587, //Important Mailer Port
  secure: false,
  tls: {
    rejectUnauthorized: false //Won't throw you any cert errors
  },
  auth: {
    user: "username that comes before the at",
    pass: "password"
  }
});

/* GET home page. */
router.get('/', async function(req, res, next) {
  const exampleData = {
    name: "Meet",
    email:"paulsender99@gmail.com",
    subject: "no",
    message: "nonononononononononononononononono"
  }
  try {
    let info = await transporter.sendMail({
      from: `"${exampleData.name}" <${exampleData.email}>`, // sender address
      to: "senderp@wit.edu.com", // list of receivers comma seperated
      subject: `${exampleData.subject}`, // Subject line
      text: `${exampleData.message}`, // plain text body
    });
    res.render('index', { title: info.messageId });
  }
  catch(e) {
    console.log(e)
  }
  
  
});

module.exports = router;
