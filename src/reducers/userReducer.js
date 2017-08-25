import { LOAD_USER_SUCCESS } from '../actions/types';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS: {
      return action.user;
    }

    default:
      return state;
  }
}
