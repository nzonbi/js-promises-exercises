
var q = require('q')


var pa = q.defer()
var pb = q.defer()

var all = function(pa, pb) {
  var count = 0
  var px = q.defer()
  var results = []

  var incr = function(result) {
    results.push(result)
    count++
    if (count === 2) px.resolve(results)
  }

  pa.promise.then(incr)
  pb.promise.then(incr)

  return px.promise
}

all(pa, pb)
  .then(console.log)


setTimeout(function() {
  pa.resolve('PROMISES')
  pb.resolve('FTW')
}, 200)
