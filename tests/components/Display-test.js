var React = require('react')
var mount = require('enzyme').mount
var Display = require('../../src/app/main/components/Display')
var assert = require('chai').assert

describe('<Display />', () => {
  
  it('should display the time passed via props', () => {
    const component = mount(<Display time="11:04" />)
    assert.equal('11:04', component.find('#time').text())
  })
})