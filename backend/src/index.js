const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fabriciobedin:muzc7aFMsdL7LcF@cluster0-rihgs.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

const app = express()

app.use(require('./routes'))

app.listen(3333)
