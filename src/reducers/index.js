import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, // Short hand prop name (same as saying "courses: courses")
  authors
});

export default rootReducer;
