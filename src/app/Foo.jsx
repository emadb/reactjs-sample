import React from 'react'
import AppDispatcher from '../redux/AppDispatcher'
import withState from '../redux/withState'
import buildReducer from '../redux/buildReducer'

const Foo = React.createClass({
  handleClick(){
    AppDispatcher.dispatch({type:'CLICKED', content: 'hello world'})
  },
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <label>{this.props.message}</label>
      </div>
    )
  }
})

function reducer1(state, action) {
  return Object.assign({}, state, {message: action.content})
}

function reducer2(state) {
  return Object.assign({}, state, {message: state.message.toLocaleUpperCase()})
}



export default withState(Foo, [buildReducer(reducer1), buildReducer(reducer2)], {message: 'loaded'})