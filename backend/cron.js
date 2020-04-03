import AWS from 'aws-sdk';

export const handler = async event => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  await docClient
    .put({
      TableName: process.env.DYNAMODB_CRON_TABLE,
      Item: { triggerDate: Date() }
    })
    .promise();

  return true;
};
