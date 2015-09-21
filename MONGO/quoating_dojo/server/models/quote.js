// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuotingDojoSchema = new mongoose.Schema({
	name: String,
	quote: String
});
var Quote = mongoose.model('Quote', QuotingDojoSchema);