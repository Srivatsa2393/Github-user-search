import { combineReducers } from 'redux';

import repos from './reposReducer';

const rootReducer = combineReducers({
  repos: repos
});

export default rootReducer;
