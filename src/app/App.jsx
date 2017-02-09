import React from 'react'
import ReactDom from 'react-dom'


require('../sass/style.scss')

const App = React.createClass({
  render(){
    return (
      <div>
        <h2>Spotify</h2>
      </div>
    )
  }
})

ReactDom.render(<App />, document.getElementById('app'))
