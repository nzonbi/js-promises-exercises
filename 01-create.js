var q = require('q')
  , def = q.defer()

def.promise
  .then(console.log)

setTimeout(function() {
  def.resolve('RESOLVED!')
}, 300)
