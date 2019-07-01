const mongoose = require('mongoose')

const Tweet = mongoose.model('Tweet')

const getTweets = async (query) => Tweet.find({ 'text': { '$regex': query, '$options': 'i' } }, (error_, listOfTweets) => listOfTweets).limit(10)

module.exports = {
  getTweets
}
