"use strict"

const axios = require("axios")

module.exports.hello = async (event, context) => {
  // GET Request Handler
  // https://ld1smpeg50.execute-api.us-east-1.amazonaws.com/dev/users?name=Rohito
  // if (event.queryStringParameters) {
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: `Wassssup ${
  //         event.queryStringParameters.name
  //       }! Serverless Architecture! ${event}`
  //     })
  //   }
  // }

  // Get Request -- Developers

  if (event) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(data => res.data)
      .then(data => data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        data
      })
    }
  }

  // POST Request Handler

  if (event.body) {
    event.body = JSON.parse(event.body)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: event.body,
        status: "Success"
      })
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `Something went wrong!`
      })
    }
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
