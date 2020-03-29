module.exports = lambdaFunc => async event => {
  let response = await lambdaFunc(event);
  if (response.headers) response.headers['Access-Control-Allow-Origin'] = '*';
  else response.headers = { 'Access-Control-Allow-Origin': '*' };
  return response;
};
