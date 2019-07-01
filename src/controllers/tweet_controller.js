const TweetService = require('../services/tweet_service')

const getTweets = async (req, res) => {
  try {
    console.log(req.query)
    var response = await TweetService.getTweets(req.query.text)
    res.send(response).status(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
}

module.exports = {
  getTweets
}
