var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = 
{
	show: function(req, res)
	{
		Quote.find({}, function(err, quotes)
		{
			res.render('quotes', {response: quotes});
			console.log(quotes);
		});
	},
	create: function(req, res)
	{

    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err)
     {
	      if(err)
	      {
	        console.log("something went wrong");
	      } 
	      else
	      {
	      	console.log("Successfully added a new quote");
	        res.redirect('/quotes');
	      }
    });
  }
}

  