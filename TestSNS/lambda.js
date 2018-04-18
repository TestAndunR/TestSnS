let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
	console.log("Message sent");
	sns.publish({
		Message: 'Testing for SNS as a resource',
		Subject: 'TestSNS',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:318300609668:SMS_SNS'
	}).promise()
		.then(data => {
			// your code goes here
			console.log("Success SNS");
		})
		.catch(err => {
			// error handling goes here
			console.log("Error caused");
		});

	callback(null, 'Successfully executed');
}