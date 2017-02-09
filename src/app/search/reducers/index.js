import buildReducer from '../../../redux/buildReducer'

function setArtists(state, action){
  if(action.type === 'SEARCH_COMPLETED'){
    return Object.assign({}, state, {artists: action.content.artists})
  }
}

module.exports = [buildReducer(setArtists)]