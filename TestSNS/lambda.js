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
	sns.publish({
		Message: 'Test Direct SMS resource type',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Promotional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: 'Andun'
			},
		},
		PhoneNumber: '+940770630943'
	}).promise()
		.then(data => {
			// your code goes here
			console.log("SMS Sent Successfully");
		})
		.catch(err => {
			// error handling goes here
			console.log("Send failed");
		});

	callback(null, 'Successfully executed');
}