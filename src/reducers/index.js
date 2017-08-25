import { combineReducers } from 'redux';

import repos from './reposReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  repos: repos,
  user: user
});

export default rootReducer;
