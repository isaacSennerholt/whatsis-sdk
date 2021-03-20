const axios = require('axios');
const createCrudClient = require('create-crud-client');

function configure({ baseUrl, bearerToken } = {}) {
  if (!baseUrl) {
    throw new Error('"baseUrl" is missing from configuration.');
  }

  let headers = { 'content-type': 'application/json' };

  if (bearerToken) {
    headers = { ...headers, Authorization: `Bearer ${bearerToken}` };
  }

  const options = {
    baseUrl,
    headers,
    adapter: ({ data }) => data,
    errorProcessor: ({ response = {} }) => {
      const { data } = response;
      return Promise.reject(data);
    },
  };

  return createCrudClient(axios)(options);
}

module.exports = { configure };
