function configure(apiClient = {}) {
  if (typeof apiClient.get !== 'function') {
    throw new Error('A get method is a required configuration.')
  }
  if (typeof apiClient.post !== 'function') {
    throw new Error('A post method is a required configuration.')
  }

  return {
    createProfile: async payload => {
      return apiClient.post('/profiles', { data: payload })
    },
    getProfilesByAttributes: async attributes => {
      return apiClient.get('/profiles', { params: attributes })
    },
    getProfileById: async id => {
      return apiClient.get(`/profiles/${id}`)
    },
  }
}

module.exports = { configure }
