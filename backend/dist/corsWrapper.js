"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsWrapper = void 0;

const corsWrapper = lambdaFunc => async event => {
  let response = await lambdaFunc(event);
  if (response.headers) response.headers['Access-Control-Allow-Origin'] = '*';else response.headers = {
    'Access-Control-Allow-Origin': '*'
  };
  return response;
};

exports.corsWrapper = corsWrapper;