function configure(apiClient = {}) {
  if (typeof apiClient.get !== 'function') {
    throw new Error('A get method is a required configuration.')
  }
  if (typeof apiClient.post !== 'function') {
    throw new Error('A post method is a required configuration.')
  }

  return {
    createAccount: async payload => {
      return apiClient.post('/accounts', { data: payload })
    },
    getAccountsByAttributes: async attributes => {
      return apiClient.get('/accounts', { params: attributes })
    },
    getAccountById: async id => {
      return apiClient.get(`/accounts/${id}`)
    }
  }
}

module.exports = { configure }
