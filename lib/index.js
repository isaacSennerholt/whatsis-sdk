const apiClient = require('./apiClient.js')
const accountApi = require('./accountApi.js')
const profileApi = require('./profileApi.js')

const apis = {
  configure: apiClient => ({
    accountApi: accountApi.configure(apiClient),
    profileApi: profileApi.configure(apiClient),
  }),
}

module.exports = {
  apiClient,
  apis,
  accountApi,
  profileApi,
}
