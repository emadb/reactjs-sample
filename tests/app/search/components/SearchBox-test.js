var React = require('react')
var mount = require('enzyme').mount
var SearchBox = require('../../../../src/app/search/components/SearchBox')
var assert = require('chai').assert

describe('<SearchBox />', () => {
  
  it('click on search should call onSearch callback', (done) => {
    const component = mount(<SearchBox onSearch={(evt) => {
      console.log('-', evt)
      done()
    }}/>)
    const input = component.find('.form-control')
    input.get(0).value = 'text'       // have to get the node...
    input.first().simulate('change')  // have to use the wrapper...
    component.find('button').simulate('click')
  })
})