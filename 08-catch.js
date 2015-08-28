
var q = require('q')


var throwMyGod = function() {
  throw(new Error('OH NOES'))
}

var iterate = function(x) {
  console.log(x)
  return ++x
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

  .then(iterate)
  .then(iterate, console.log)
