var express = require('express')
var app = express();
var path = __dirname + '/views/';


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.get('/predict', function (req, res) {
    res.sendFile(path + "predict.html");
});


app.post('/result', function (req, res) {
    res.sendFile(path + "result.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})