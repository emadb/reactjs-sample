var React = require('react')
var mount = require('enzyme').mount
var SearchBox = require('../../../../src/app/search/components/SearchBox')
var assert = require('chai').assert

describe('<SearchBox />', () => {
  
  it('click on search should call onSearch callback', (done) => {
    const component = mount(<SearchBox onSearch={(evt) => {
      assert.equal(evt, 'beatles')
      done()
    }}/>)
    const input = component.find('input[type="text"]')
    input.get(0).value = 'beatles'
    input.first().simulate('change')
    component.find('button').simulate('click')
  })
})