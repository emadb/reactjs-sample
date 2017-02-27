import React from 'react'
import AppDispatcher from './AppDispatcher'

function combineReducers(reducers, state, action){
  const newState = reducers.reduce((acc, r) => {
    const projection = r.project(acc)
    return Object.assign({}, acc, r(projection, action))  
  }, state)
  return newState
}

function withState(InnerComponent, reducers = [], initialState = {}) {
  return React.createClass({
    getInitialState(){
      return {innerState: initialState}
    },
    componentWillMount() {
      this.regId = AppDispatcher.register(action => {
        const nextState = combineReducers(reducers, this.state.innerState, action)
        console.log('Update', nextState)
        this.setState({innerState: nextState})
      })  
    },
    componentWillUnmount() {
      AppDispatcher.unregister(this.regId)
    },
    render() {
      return <InnerComponent {...this.state.innerState} {...this.props} />
    }
  })
}

export default withState