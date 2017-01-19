var main = require('../../src/app/main/reducers/main')
var assert = require('chai').assert

describe('Main reducer', () => {
  
  it('INIT should setup the state', () => {
    const state = main({}, {type: 'INIT', payload: {userId: 'users/ema', username: 'ema', timerId: '123'}})
    assert.equal('users/ema', state.userId)
    assert.equal('ema', state.username)
    assert.equal('123', state.timerId)
    assert.isTrue(state.isLoggedIn)
  })

})