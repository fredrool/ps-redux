import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // Short hand prop name (same as saying "courses: courses")
});

export default rootReducer;
