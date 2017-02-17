import React from 'react'
import {Link} from 'react-router'

export default class SearchResult extends React.Component {
  render() {
    const arts = this.props.artists.map(a => {
      return ( 
        <li key={a.id}>
          <Link to={`/artists/${a.id}`}>{a.name}</Link>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {arts}
        </ul>
      </div>
    )
  }
}