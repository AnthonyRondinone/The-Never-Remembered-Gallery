import { RECEIVE_FEED_POSTS, RECEIVE_POST_DETAIL } from '../actions/post_actions';
import { RECEIVE_COMMENT, RECEIVE_DELETE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';



export const commentsReducer = (state = {}, action ) => {
  switch(action.type) {
    case RECEIVE_FEED_POSTS:
      if(action.posts.comments === undefined) return {};
      else return action.posts.comments;
      break;
    case RECEIVE_COMMENT:
      state = {
        ...state,
        [action.comment.id]: action.comment
      };
      break;
    case RECEIVE_POST_DETAIL:
      if(action.post.comments === undefined) return state;
      else {
        state = merge({}, state, action.post.comments);
      }
      break;
  }
  return state;
};






// export const commentsReducer = (state = {}, action ) => {
//   Object.freeze(state);
//   let newState;
//   switch(action.type) {
//     case RECEIVE_DELETE_COMMENT:
//       newState = merge({}, state);
//       delete newState[action.comment.id];
//       return newState;
//     case RECEIVE_FEED_POSTS:
//       if(action.posts.comments === undefined) return {};
//       else return action.posts.comments;
//     case RECEIVE_COMMENT:
//       newState = merge({}, state, {[action.comment.id]: action.comment});
//       return newState;
//     case RECEIVE_POST_DETAIL:
//       if(action.post.comments === undefined) return state;
//       else {
//         newState = merge({}, state, action.post.comments);
//         return newState;
//       }
//     default:
//       return state;
//   }
// };
