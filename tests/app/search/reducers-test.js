const reducers = require('../../../src/app/search/reducers')
const assert = require('chai').assert

describe('Controls reducers', () => {  
  it('SEARCH_COMPLETED should return the artists list', () => {
    const state = reducers[0]({}, {type: 'SEARCH_COMPLETED', content: {artists: [{name: 'one'},{name: 'two'}]}})
    assert.equal(state.artists.length, 2)  
  })
})