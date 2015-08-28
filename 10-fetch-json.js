
var q = require('q')
var HTTP = require("q-io/http");


var jsonProm = HTTP.read('http://localhost:1337')
  .then(function(res) {
    console.log(JSON.parse(res))
  }, console.error).done()
