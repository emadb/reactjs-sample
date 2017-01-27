import React from 'react'
import ReactDom from 'react-dom'
import Search from './search'

require('../sass/style.scss')

const App = React.createClass({
  render(){
    return (
      <div>
        <h2>Spot</h2>
        <Search />
      </div>
    )
  }
})

ReactDom.render(<App />, document.getElementById('app'))
