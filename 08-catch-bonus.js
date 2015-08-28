
var q = require('q')


var throwMyGod = function() {
  throw(new Error('OH NOES'))
}

var iterate = function(x) {
  console.log(x)
  return ++x
}

var alertError = function(x) {
  console.log('there was an error')
}

q.fcall(iterate, 1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)

  .then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)

  .then(iterate, alertError)
