const axios = require("axios")

let info = ""
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.data)
  .then(data => {
    info = data
  })
  .catch(err => console.log({ err }))

setTimeout(() => {
  console.log(info)
}, 2000)
