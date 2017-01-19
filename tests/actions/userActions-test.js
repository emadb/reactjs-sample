import usersActions from '../../src/app/main/actions/usersActions'
import actionStream from '../../src/redux/actionStream'
import {assert} from 'chai'

describe('usersActions', () => {
  it('toggleSelectedUsers should push an event on the stream', done => {
   const stream = actionStream.createStream()
    var isDone = false
    const listener = stream.addListener({
        next: s => {
          if (!isDone){
            isDone = true
            assert.equal('foo', s.payload.username)
            stream.removeListener(listener)
            done()
          }
        },
        error: (err) => {},
        complete: () => {},
      })
    usersActions.toggleSelectedUsers({username: 'foo'})
  })
})
