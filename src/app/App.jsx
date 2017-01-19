import React from 'react'
import ReactDom from 'react-dom'

const App = React.createClass({
  render(){
    return (
      <div>
        <h2>hello</h2>
      </div>
    )
  }
})

ReactDom.render(<App />, document.getElementById('app'))
