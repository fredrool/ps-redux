import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) { // Setting initial state to []
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
