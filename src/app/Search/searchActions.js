import request from 'superagent'
import settings from 'settings'
import dispatcher from '../../redux/AppDispatcher'

const actions = {

  search(what){ 
    dispatcher.dispatch({type: 'WAITING', content: {message: 'search in progress...'}})
    request
      .get(`${settings.host}/search?type=artist&q=${what}`)
      .then(res => {
        dispatcher.dispatch({type: 'SEARCH_COMPLETED', content: {artists: res.body.artists.items}})    
      })
  }
}

export default actions