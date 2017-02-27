const request = require('superagent')
const settings = require('settings')
const baseUrl = settings.host

const client = {
  del: function(path) {
    return request
      .del(baseUrl + path)
  },
  get: function(path) {
    return request
      .get(baseUrl + path)
      .set('Accept', 'application/json')
  },
  patch: function(path, data) {
    return request
      .patch(baseUrl + path, data)
  },
  post: function(path, data) {
    return request
      .post(baseUrl + path, data)
  },
  put: function(path, data) {
    return request
      .put(baseUrl + path, data)
  }
}


module.exports = client
