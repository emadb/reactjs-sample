import React from 'react'
import xs from 'xstream'
import actions from './actionStream'
import ws from './webSocketStream'

function combineReducers(reducers, state, action){
  const newState = reducers.reduce((acc, r) => {
    const projection = r.project(acc)
    return Object.assign({}, acc, r(projection, action))  
  }, state)
  return newState
}

function Wrapper(InnerComponent, reducers = [], initialState = {}) {
  return React.createClass({
    getInitialState(){
      return {innerState: initialState}
    },
    componentWillMount() {
      const actionStream = actions.createStream()
      const wsStream = ws.createStream() 
      this.stream = xs.merge(wsStream, actionStream)
      this.listener = {
        next: s => this.setState({innerState: s})
      }

      this.stream
        .map(action => combineReducers(reducers, this.state.innerState, action))
        .addListener(this.listener)
    },
    componentWillUnmount() {
      this.stream.removeListener(this.listener)
    },
    render() {
      return <InnerComponent {...this.state.innerState} {...this.props} />
    }
  })
}

export default Wrapper