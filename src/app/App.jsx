import React from 'react'
import ReactDom from 'react-dom'
import Foo from './Foo'

const App = React.createClass({
  render(){
    return (
      <div>
        <h2>Spot</h2>
        <Foo />
      </div>
    )
  }
})

ReactDom.render(<App />, document.getElementById('app'))
