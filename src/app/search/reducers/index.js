import buildReducer from '../../../redux/buildReducer'

function setArtists(state, action){
  if(action.type === 'SEARCH_COMPLETED'){
    return Object.assign({}, state, {artists: action.content.artists})
  }
}

function projector(state){
  return state; //identity!
}

module.exports = [buildReducer(setArtists, projector)]