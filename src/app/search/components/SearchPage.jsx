import React from 'react'
import searchActions from '../actions/searchActions'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

export default class SearchPage extends React.Component {
  constructor(){
    super()
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(what){
    searchActions.search(what)
  }
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <SearchBox onSearch={this.handleSearch} />
            <small className="text-muted">Found {this.props.artists.length} artists</small>
          </div>
        </div>
        <div className="row">
          <SearchResult items={this.props.artists} />
        </div>
      </div>
    )
  }
}



