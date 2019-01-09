'use strict';

module.exports.hello = async (event, context) => {

  // GET Request Handler
  // https://ld1smpeg50.execute-api.us-east-1.amazonaws.com/dev/users?name=Rohito
  if(event.queryStringParameters){
    return  {
      statusCode:200,
      body: JSON.stringify(
         `Wassssup ${event.queryStringParameters.name}! Serverless Architecture!`
      )
    }
  }

  // POST Request Handler

  if(event.body){
    event.body = JSON.parse(event.body)
    return{
      statusCode:200,
      body: JSON.stringify({message: event.body,
      status: "Success"})
    }
  }
  else{
    console.log({event})
    return {
      statusCode:404,
      body: JSON.stringify({
        message: `Something went wrong!`
      })
    }
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
