const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<b>Hello</b><br> <p>World</p>')
})
 
app.listen(3000)