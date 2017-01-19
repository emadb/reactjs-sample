import stringifyTime from '../../src/app/main/actions/stringifyTime'
import {assert} from 'chai'

describe('stringifyTime', () => {
  it('6000 should return 00:06', () => {
    assert.equal('00:06', stringifyTime(6000))
  })

  it('1500000 should return 25:00', () => {
    assert.equal('25:00', stringifyTime(1500000))
  })

  it('1499000 should return 24:59', () => {
    assert.equal('24:59', stringifyTime(1499000))
  })

  it('0 should return 00:00', () => {
    assert.equal('00:00', stringifyTime(0))
  })
})
