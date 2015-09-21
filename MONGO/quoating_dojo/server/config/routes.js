var quotes = require('../controllers/quotes.js');
module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.post('/process', function(req, res)
	 {
		console.log("POST DATA", req.body);
		quotes.create(req, res);

	});

	app.get('/quotes', function(req, res)
	{
	 	quotes.show(req, res);
	});
}




