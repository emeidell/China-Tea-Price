var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");

app.use(bodyParser.json);



app.listen(8000, function () {
    console.log("your server is running")
});