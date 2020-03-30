const corsWrapper = require('backend/corsWrapper');
const AWS = require('aws-sdk');
module.exports.create = corsWrapper(async event => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  try {
    await docClient
      .put({
        TableName: process.env.DYNAMODB_CRUD_TABLE,
        Item: JSON.parse(event.body)
      })
      .promise();

    const result = await docClient
      .scan({ TableName: process.env.DYNAMODB_TABLE })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: e.message })
    };
  }
});
