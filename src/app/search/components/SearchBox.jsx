import React from 'react'

export default class SearchBox extends React.Component{
  constructor(){
    super()
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(){
    this.props.onSearch(this.refs.searchText.value)
  }
  render(){
    return (
      <div className="form-inline">
        <input type="text" ref="searchText" className="form-control"/>
        <button onClick={this.handleSearch} type="button" className="btn btn-primary" >Search</button>
      </div>
    )
  }
}