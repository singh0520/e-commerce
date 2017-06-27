var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'singh0520@gmail.com',
			pass: 'Nnnmmm05'
		}
	});

	var mainOption = {
		from: 'Nikhil Singh <nikhilsingh@gmail.com>',
		to: 'singh0520@gmail.com',
		subject: 'Website Submission',
		text: 'you have a new submission with following details...Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p> You have got new submission with following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>' 
	};

	transporter.sendMail(mainOption, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});

});

module.exports = router;
