const createReducer = (reducer, projectorFn = s => s) => {
  reducer.project = projectorFn
  return reducer
}

/**
 * Build a reducer function.
 * @constructor
 * @param {function|map} mapOrFn - the reduce function or a map (actionType, fn)
 * @param {string} projectorFn - (optional) the project fn that receive the state
 */
const buildReducer = function(mapOrFn, projectorFn = s => s){
  if (typeof(mapOrFn) === 'function'){
    return createReducer(mapOrFn, projectorFn)
  } 
  const reducer = function(state, action) {
    if (action.type in mapOrFn){
      return mapOrFn[action.type](state, action)
    } 
    return state
  }
  reducer.project = projectorFn
  return reducer
}

export default buildReducer