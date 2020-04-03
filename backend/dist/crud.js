"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = void 0;

var _corsWrapper = require("./corsWrapper");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const create = (0, _corsWrapper.corsWrapper)(async event => {
  var _body$nullish, _body$sample;

  const docClient = new _awsSdk.default.DynamoDB.DocumentClient();
  const body = JSON.parse(event.body);
  const nullish = (_body$nullish = body.nullish) !== null && _body$nullish !== void 0 ? _body$nullish : 'Default';
  const optionalChaining = (_body$sample = body.sample) === null || _body$sample === void 0 ? void 0 : _body$sample.optionalChaning;

  try {
    await docClient.put({
      TableName: process.env.DYNAMODB_CRUD_TABLE,
      Item: { ...body,
        createDate: Date(),
        nullish,
        optionalChaining
      }
    }).promise();
    const result = await docClient.scan({
      TableName: process.env.DYNAMODB_CRUD_TABLE
    }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        result
      })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: e.message
      })
    };
  }
});
exports.create = create;