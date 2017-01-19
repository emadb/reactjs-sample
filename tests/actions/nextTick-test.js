var nextTick = require('../../src/app/main/actions/nextTick')
var assert = require('chai').assert

describe('nextTick', () => {
  
  it('giving 4 secs next tick should be 3 secs', () => {
    const next = nextTick(4000)
    assert.equal(3000, next)
  })

  it('giving 25 minutes next tick should be 24:59', () => {
    const next = nextTick(1500000)
    assert.equal(1499000, next)
  })

  it('giving 1 sec next tick should be 0', () => {
    const next = nextTick(1000)
    assert.equal(0, next)
  })
})