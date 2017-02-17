import React from 'react'
// import dispatcher from '../redux/AppDispatcher'
import Wrapper from '../../redux/Wrapper'
import buildReducer from '../../redux/buildReducer'
import searchActions from './searchActions'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'
import MessageBox from './MessageBox'

class SearchPage extends React.Component {

  handleSearch(what) {
    searchActions.search(what)
  }

  render() {
    return (
      <div> 
        <SearchBox onSearch={this.handleSearch} />
        <MessageBox text={this.props.message} />
        <SearchResult artists={this.props.artists} />
      </div>
    )
  }
}

function setMessage(state, action) {
  if(action.type === 'WAITING') {
    return Object.assign({}, state, {message: action.content.message})
  }
}

function setResult(state, action) {
  if(action.type === 'SEARCH_COMPLETED') {
    return Object.assign({}, state, {artists: action.content.artists, message: ''})
  }
}



export default Wrapper(SearchPage, [buildReducer(setMessage), buildReducer(setResult)], {message: '', artists: []})