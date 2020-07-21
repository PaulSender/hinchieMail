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
  port: 465, //Important Mailer Port
  secure: true,
  tls: {
    rejectUnauthorized: false //Won't throw you any cert errors
  },
  auth: {
    user: "username that comes before the at",
    pass: "password"
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const exampleData = {
    name: "Meet",
    email:"catfoodlover123@gmail.com",
    subject: "no",
    message: "nonononononononononononononononono"
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
