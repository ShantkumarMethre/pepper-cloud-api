const express = require('express')
const TweetController = require('../controllers/tweet_controller')

var tweetRouter = express.Router()

tweetRouter.get('/get', TweetController.getTweets)

module.exports = tweetRouter
