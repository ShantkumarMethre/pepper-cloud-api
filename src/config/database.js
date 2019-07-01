const mongoose = require('mongoose')
const { MONGODB_URL } = require('./constants')

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0-lbayf.mongodb.net/twitter?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

// Models
require('../models/TweetData')
