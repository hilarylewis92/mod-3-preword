require('es6-promise')
const http = require("q-io/http")

return http.read('http://localhost:7000/')
  .then((uid) => {
    return http.read("http://localhost:7001/" + uid)
  })
  .then((json) => {
    console.log(JSON.parse(json))
  })
  .then(null, console.error)
  .done()
