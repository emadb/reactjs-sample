const display = require('../../src/app/main/reducers/display')
const assert = require('chai').assert

describe('Display reducers', () => {
  
  it('POMODORO_STARTED should return the timerId and pomodoroId', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456'}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    assert.equal(state.timerId, '123')
    assert.equal(state.pomodoroId, '456')
    assert.isTrue(state.ticking)
  })

  it('POMODORO_STARTED shared with others, isShared should be true', () => {
    const actionPayload = { timerId: '123', pomodoroId: '456', sharedWith: ['foo']}
    const state = display({}, {type: 'POMODORO_STARTED', payload: actionPayload})
    assert.isTrue(state.isShared)
  })

  it('POMODORO_COMPLETED should reset time', () => {
    const state = display({}, {type: 'POMODORO_COMPLETED', payload: {}})
    assert.equal('25:00', state.time)
    assert.isFalse(state.ticking)
  })

  it('POMODORO_SQUASHED should reset time', () => {
    const state = display({}, {type: 'POMODORO_SQUASHED'})
    assert.equal('25:00', state.time)
    assert.isFalse(state.ticking)
  })

  it('POMODORO_VOIDED should reset time', () => {
    const state = display({}, {type: 'POMODORO_VOIDED'})
    assert.equal('25:00', state.time)
    assert.isFalse(state.ticking)
  })

  it('UPDATE_TIMER should update the time', () => {
    const state = display({}, {type: 'UPDATE_TIMER', payload: {time: 930000}})
    assert.equal('15:30', state.time)
    assert.isTrue(state.ticking)
  })

  it('RESUME_TIMER should return new timer status', () => {
    const state = display({}, {type: 'RESUME_TIMER', payload: {time: 604000, timerId: '123', pomodoroId: '456'}})
    assert.equal('10:04', state.time)
    assert.equal('123', state.timerId)
    assert.equal('456', state.pomodoroId)
    assert.isTrue(state.ticking)
  })

})