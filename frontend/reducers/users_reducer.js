import { RECEIVE_SINGLE_USER, requestSingleUser } from '../actions/user_actions';
import { merge } from 'lodash';

export const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  // debugger
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      newState = {[action.user.id]: action.user};
      return newState;
    default:
    return state;
  }
};