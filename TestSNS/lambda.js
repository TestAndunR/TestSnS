let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	console.log("Message sent");

	callback(null,'Successfully executed');
}