import AppDispatcher from '../../../redux/AppDispatcher'
import api from '../../apiClient'

const actions = {
  search(what){
    api.get(`/search?type=artist&q=${what}`).then(res => {
      AppDispatcher.dispatch({type: 'SEARCH_COMPLETED', content: {artists: res.body.artists.items}})
    })
  }
}

export default actions

 