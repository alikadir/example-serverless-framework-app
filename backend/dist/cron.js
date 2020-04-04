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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Nyb24uanMiXSwibmFtZXMiOlsiaGFuZGxlciIsImRvY0NsaWVudCIsIkFXUyIsIlRhYmxlTmFtZSIsInByb2Nlc3MiLCJJdGVtIiwidHJpZ2dlckRhdGUiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQSxPQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7Ozs7Ozs7O0FBRU8sTUFBTUEsT0FBTyxHQUFHLE1BQUEsS0FBQSxJQUFlO0FBQ3BDLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxPQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxRQUFBQSxDQUF0QixjQUFrQixFQUFsQjtBQUVBLFFBQU0sU0FBUyxDQUFULEdBQUEsQ0FDQztBQUNIQyxJQUFBQSxTQUFTLEVBQUVDLE9BQU8sQ0FBUEEsR0FBQUEsQ0FEUixtQkFBQTtBQUVIQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsV0FBVyxFQUFFQyxJQUFJO0FBQW5CO0FBRkgsR0FERCxFQUFOLE9BQU0sRUFBTjtBQU9BLFNBQUEsSUFBQTtBQVZLLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG4gIGF3YWl0IGRvY0NsaWVudFxuICAgIC5wdXQoe1xuICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5EWU5BTU9EQl9DUk9OX1RBQkxFLFxuICAgICAgSXRlbTogeyB0cmlnZ2VyRGF0ZTogRGF0ZSgpIH1cbiAgICB9KVxuICAgIC5wcm9taXNlKCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIl19