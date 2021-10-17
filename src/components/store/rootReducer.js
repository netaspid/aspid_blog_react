import {combineReducers} from '@reduxjs/toolkit';
import {reducer as contentReducer} from '../slices/content';
import {reducer as userReducer} from '../slices/users';
const rootReducer = combineReducers({
  content: contentReducer,
  users: userReducer,
});

export default rootReducer;
