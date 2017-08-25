import axios from 'axios';
import { LOAD_USER_SUCCESS } from './types';

export function loadUser(user) {
  return {
    type: LOAD_USER_SUCCESS,
    payload: user
  };
}
