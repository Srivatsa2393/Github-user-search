import axios from 'axios';
import { LOAD_REPOS_SUCCESS } from './types';

export function loadReposSuccess(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    payload: repos
  };
}

export function loadRepos(user) {
  return function(dispatch) {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(repos => {
        dispatch(loadReposSuccess(repos.data));
        console.log('receiving the following user data: ' + repos.data);
      })
      .catch(err => {
        throw err;
      });
  };
}
