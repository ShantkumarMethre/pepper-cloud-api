var express = require('express')
var cors = require('cors')
require('./src/config/database')

var tweetRouter = require('./src/routes/tweet_route')

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api/', tweetRouter)

app.listen(process.env.PORT || 3000, function () {
  console.log('listening')
})

module.exports = app
