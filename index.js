var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World Part 2!')
})

app.listen(80, function () {
  console.log('Listening on port 3000...')
})
