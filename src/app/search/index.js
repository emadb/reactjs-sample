import Search from './Search'
//import reducers from './reducers'
import Wrapper from '../../redux/Wrapper'
import buildReducer from '../../redux/buildReducer'
//import INITIAL_STATE from './INITIAL_STATE'


function setArtists(state, action){
  if(action.type === 'SEARCH_COMPLETED'){
    return Object.assign({}, state, {artists: action.content.artists})
  }
}


export default Wrapper(Search, [buildReducer(setArtists)], {artists: []})
