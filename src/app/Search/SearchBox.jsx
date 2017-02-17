import React from 'react'

export default class SearchBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {text: ''}
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSearchClick(){
    //this.props.onSearch(this.refs.text.value)
    this.props.onSearch(this.state.text)
  }

  handleChange(evt){ 
    this.setState({ text: evt.target.value })
  }

  render() {
    return (
      <div className="form"> 
        
        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.text} />

        <button className="btn btn-primary" onClick={this.handleSearchClick} >Search</button>
      </div>
    )
  }
}