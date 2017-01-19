var controls = require('../../src/app/main/reducers/controls')
var assert = require('chai').assert

describe('Controls reducers', () => {
  
  it('POMODORO_STARTED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_STARTED'})
    assert.isTrue(state.startDisabled)
    assert.isFalse(state.squashDisabled)
  })

  it('POMODORO_SQUASHED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_SQUASHED'})
    assert.isFalse(state.startDisabled)
    assert.isTrue(state.squashDisabled)
  })

  it('POMODORO_COMPLETED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_COMPLETED'})
    assert.isFalse(state.startDisabled)
    assert.isTrue(state.squashDisabled)
  })

  it('POMODORO_VOIDED should return buttons status', () => {
    const state = controls({}, {type: 'POMODORO_VOIDED'})
    assert.isFalse(state.startDisabled)
    assert.isTrue(state.squashDisabled)
  })

})