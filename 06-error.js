var q = require('q')


var parsePromised = function() {
  var def = q.defer()
  var json = process.argv[2]
  try {
    var parsed = JSON.parse(json)
    def.resolve(parsed)
  } catch(e) {
    def.reject(e)
  }
  return def.promise
}

parsePromised()
  .then(null, console.log)
