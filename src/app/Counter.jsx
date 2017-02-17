import React from 'react'
import dispatcher from '../redux/AppDispatcher'
import Wrapper from '../redux/Wrapper'
import buildReducer from  '../redux/buildReducer'

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    dispatcher.dispatch({
      type: 'PLUS_CLICKED',
      content: {}
    })
  }

  render() {
    return (
      <div> 
        <button className="btn btn-primary" onClick={this.handleClick}> +1 </button>
        <label>{this.props.counter}</label>
      </div>
    )
  }
}

function increment(state, action) {
  if (action.type === 'PLUS_CLICKED') {
    return Object.assign({}, state, { counter: state.counter + 1 })
  }
}

export default Wrapper(Counter, [buildReducer(increment)], {counter: 0})