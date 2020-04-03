import { corsWrapper } from './corsWrapper';
import AWS from 'aws-sdk';

export const create = corsWrapper(async event => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const body = JSON.parse(event.body);
  const nullish = body.nullish ?? 'Default';
  const optionalChaining = body.sample?.optionalChaning;
  try {
    await docClient
      .put({
        TableName: process.env.DYNAMODB_CRUD_TABLE,
        Item: { ...body, createDate: Date(), nullish, optionalChaining }
      })
      .promise();

    const result = await docClient.scan({ TableName: process.env.DYNAMODB_CRUD_TABLE }).promise();

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
