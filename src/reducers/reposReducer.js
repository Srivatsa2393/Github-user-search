import { LOAD_REPOS_SUCCESS } from '../actions/types';

export default function reposReducer(state = [], action) {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS:
      return action.repos;

    default:
      return state;
  }
}
