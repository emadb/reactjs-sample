var React = require('react')
var mount = require('enzyme').mount
var SearchBox = require('../../../../src/app/search/components/SearchBox')
var assert = require('chai').assert

describe('<SearchBox />', () => {
  
  it('click on search should call onSearch callback', (done) => {
    const component = mount(<SearchBox onSearch={(evt) => {
      done()
    }}/>)
    component.find('.form-control').simulate('change', { target: { value: 'Hello' } })
    component.find('button').simulate('click')
  })
})