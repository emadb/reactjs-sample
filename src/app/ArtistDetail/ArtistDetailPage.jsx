import React from 'react'
import request from 'superagent'
import settings from 'settings'
import dispatcher from '../../redux/AppDispatcher'
import Wrapper from '../../redux/Wrapper'
import buildReducer from '../../redux/buildReducer'

function loadArtist(id) {
  request.get(`${settings.host}/artists/${id}`).then(res => {
    dispatcher.dispatch({type: 'ARTIST_LOADED', content: {artist: res.body}})
  })
}


class ArtistDetailPage extends React.Component {

  componentWillMount(){
    loadArtist(this.props.params.id)
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.artist.name}</h1>
      </div>
    )
  }
}

const actions = {
  'ARTIST_LOADED': (state, action) => Object.assign({}, state, {artist: action.content.artist})
}


export default Wrapper(ArtistDetailPage, [buildReducer(actions)], {artist: {}})