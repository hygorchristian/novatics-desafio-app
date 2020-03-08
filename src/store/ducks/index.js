import { combineReducers } from 'redux';

import { AuthReducer as auth } from './auth';
import { CodeReducer as code } from './code';

export default combineReducers({
  auth,
  code,
});
