import { combineReducers } from 'redux';

import authorization from './AuthorizationReducer';
import app from './AppReducer';
import auth from './AuthReducer';

export default combineReducers({
  authorization,
  app,
  auth,
});
