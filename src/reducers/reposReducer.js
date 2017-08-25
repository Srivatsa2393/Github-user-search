import { LOAD_REPOS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function reposReducer(state = initialState.repos, action) {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS: {
      return action.repos;
    }

    default:
      return state;
  }
}
