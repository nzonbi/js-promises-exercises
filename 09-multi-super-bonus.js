
var q = require('q')


var pa = q.defer()
var pb = q.defer()

q.all([ pa.promise, pb.promise ]).spread(function(va, vb) {
  console.log([va,vb])
})

setTimeout(function() {
  pa.resolve('PROMISES')
  pb.resolve('FTW')
}, 200)
