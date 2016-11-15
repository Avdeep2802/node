var mysql = require("mysql");
exports.login = function(req, res){
  res.render('login', { title: '' });
  
};

exports.authenticate = function(req, res){
    
	var email = req.body.user;
	var pwd = req.body.password;

	
	var logininfo = {
			emailid : email,
			}
	
	
	var connection = mysql.createConnection({
		host : 'dbinstance.c5xiffzyou4g.us-west-2.rds.amazonaws.com',
		user : 'avdeep',
		password : 'avdeep2802',
		database : 'cloudusers',
			port : '3306'
	});
	

	connection.query('SELECT * FROM users where emailid =?',email, function(err, rows, fields){
		if(err)
			{
				console.log("error while performing query");
//				res.render('login',{title : "Invalid Email Id"} );
			}
		if (rows.length == 0)
			{
			res.render('login',{title : "Invalid Email Id"} );
			}
		else
			{
				
				if(pwd == rows[0].password)
					{
						res.redirect('/services');
					}
				else
					{
						res.render('login',{title : "Invalid Password"} );
					}
			}
	});



	connection.end();
	
	

};