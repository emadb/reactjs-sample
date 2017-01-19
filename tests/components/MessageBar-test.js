var React = require('react')
var mount = require('enzyme').mount
var MessageBar = require('../../src/app/MessageBar')
var assert = require('chai').assert

describe('<MessageBar />', () => {
  
  it('should display the message passed via props', () => {
    const component = mount(<MessageBar message="We could be heroes" type="error" />)
    assert.equal('We could be heroes', component.find('.notification.is-danger').text())
  })
})