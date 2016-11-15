/**
 * http://usejsdoc.org/
 */


var mysql = require('mysql');


exports.service = function(req, res){
  res.render('service');
};

exports.aa = function(req, res){
	
    var firstname = req.body.firstName;
    var email = req.body.email;
    var pwd = req.body.password;
  
	var connection = mysql.createConnection({
		host : 'dbinstance.c5xiffzyou4g.us-west-2.rds.amazonaws.com',
		user : 'avdeep',
		password : 'avdeep2802',
		database : 'cloudusers',
			port : '3306'
	});

	var insert = {
			name : firstname,
			emailid : email,
			password : pwd
	}
	

	connection.query("insert into users set ?", insert,
			function(err,result){
					if(err){
						console.log("unable to insert");
						return;
					}
					else{
						console.log("data inserted");
					}
	});
	connection.end();
	
	res.redirect('/services');

};

