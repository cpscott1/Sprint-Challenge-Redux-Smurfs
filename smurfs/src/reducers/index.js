import { FETCH_START, FETCH_SUCCESS, ADD_START, ADD_SUCCESS, FAILURE } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
    return {
      ...state,
      error: null,
      fetchingSmurfs: true
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }
    case ADD_START:
    return {
      ...state,
      addingSmurf: true
    }
    case ADD_SUCCESS:
    return {
      ...state,
      smurfs: action.payload
    }
    case FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }
    default:
    return state;
  }
}
