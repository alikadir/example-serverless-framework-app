"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const handler = async event => {
  const docClient = new _awsSdk.default.DynamoDB.DocumentClient();
  await docClient.put({
    TableName: process.env.DYNAMODB_CRON_TABLE,
    Item: {
      triggerDate: Date()
    }
  }).promise();
  return true;
};

exports.handler = handler;