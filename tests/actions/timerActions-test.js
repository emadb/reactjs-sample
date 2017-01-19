import timerActions from '../../src/app/main/actions/timerActions'
import {assert} from 'chai'
import nock from 'nock'

describe('timerActions', () => {
  it('startPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartPomodoro', 
                      duration: /\d+/, 
                      timer_id: '123'
                    }).reply(201, { });   

    timerActions.startPomodoro('123', [])
    assert.isTrue(request.isDone())
  })

  it('squashPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'SquashPomodoro', 
                      timer_id: '123',
                      pomodoro_id: '456'
                    }).reply(201, { });   

    timerActions.squash('123', '456')
    assert.isTrue(request.isDone())
  })

  it('startPomodoro with users should send a StartSharedPomodoro command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartSharedPomodoro',
                      duration: /\d+/,  
                      timer_id: '123',
                      shared_with: ['456', '789']
                    }).reply(201, { });   

    timerActions.startPomodoro('123', [{timerId:'456', selected: true}, {timerId:'789', selected: true}])
    assert.isTrue(request.isDone())
  })
})
