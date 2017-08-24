import axios from 'axios';
import { LOAD_REPOS_SUCCESS } from './types';

export function loadReposSuccess(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    payload: repos
  };
}

export function loadRepos() {
  return function(dispatch) {
    axios
      .get('https://api.github.com/users/Srivatsa2393/repos')
      .then(repos => {
        dispatch(loadReposSuccess(repos.data));
      })
      .catch(err => {
        throw err;
      });
  };
}
