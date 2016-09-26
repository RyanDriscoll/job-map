var router = require('express').Router();
// var Tweet = require('../../db').model('jobLead');
var Twit = require('twit');
var secret = require('../../../node_modules/secret');
// var db = require('../../db');
const models = require('../../db/models');
var JobLead = models.JobLead;
var chalk = require('chalk');

router.get('/', function(req, res, next) {
	JobLead.findAll()
	.then(function(leads) {
		res.json(leads);
	})
	.catch(next);
});

// Posting Twitter job leads to the database
// var Twitter = new Twit(secret);

// var usa = [ '-124.848974', '24.396308', '-66.885444', '49.384358' ];

// var stream = Twitter.stream('statuses/filter', {track: 'packers'});

// stream.on('tweet', function (tweet) {
// 	// console.log("$$$$$$$$$$$$$$$$", tweet);
// 	var newTweet = {};
// 	if (tweet.place) {
// 		newTweet.userName = tweet.user.screen_name;
// 		newTweet.createdAt = tweet.created_at;
// 		newTweet.content = tweet.text;
// 		newTweet.placeName = tweet.place.full_name;
// 		newTweet.latitude = tweet.place.bounding_box.coordinates[0][0][1];
// 		newTweet.longitude = tweet.place.bounding_box.coordinates[0][0][0];
// 		JobLead.create(newTweet)
// 		.then(function(createdTweet) {
// 			console.log(chalk.blue('<<<<<<<<<<<<<<<<<<<<<<\n'), createdTweet.userName, createdTweet.content, createdTweet.placeName, createdTweet.latitude, createdTweet.longitude);
// 		})
// 		.catch();
// 	}
// });

// to find archived tweets
// Twitter.get('search/tweets', {q: '#sassafras since:2016-09-01', count: 100 }, function(err, data, response) {
//   console.log('tweets seeded', data);
//   JobLead.create()
// })
module.exports = router;

