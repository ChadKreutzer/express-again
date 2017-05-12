var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Wold!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + process.env.PORT.toString() || '3000');
});
