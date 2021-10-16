import {combineReducers} from '@reduxjs/toolkit';
import {reducer as contentReducer} from '../slices/content';
const rootReducer = combineReducers({
  content: contentReducer,
});

export default rootReducer;
