var Twit = require('twit');
var secret = require('../../node_modules/secret');
var db = require('../db');
var JobLead = db.model('jobLead');
var chalk = require('chalk');

var Twitter = new Twit(secret);
// to find archived tweets
// T.get('search/tweets', {q: '#sassafras since:2016-09-21', count: 100 }, function(err, data, response) {
//   console.log(data.statuses[1].place.bounding_box.coordinates)
// })

var stream = Twitter.stream('statuses/filter', { track: '#badgers' });

stream.on('tweet', function (tweet) {
	var newTweet = {};
	if (tweet.place) {
		// console.log(chalk.blue('SAMPLE>>>>>>>>>>>'), tweet);
		// console.log(chalk.blue('<<<<<<<<<<<<<<<<<<<<<<\n'), tweet.place.bounding_box.coordinates);
		newTweet.userName = tweet.user.screen_name;
		newTweet.createdAt = tweet.created_at;
		newTweet.content = tweet.text;
		newTweet.placeName = tweet.place.full_name;
		newTweet.lat = tweet.place.bounding_box.coordinates[0][0][1];
		newTweet.long = tweet.place.bounding_box.coordinates[0][0][0];
		// console.log("!!!!!!!!!!!!!!!", newTweet.lat, newTweet.long);
		JobLead.create(newTweet)
		.then(function(createdTweet) {
			console.log(chalk.blue('<<<<<<<<<<<<<<<<<<<<<<\n'), createdTweet);
		})
		.catch();
	}
});


