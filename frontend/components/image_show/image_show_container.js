import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addNewLike, unLike } from '../../actions/like_actions';
import { importPostDetail, deletePost, openDelete, closeDelete } from '../../actions/post_actions';
import ImageDetailItem from './image_detail_item';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
    posts: state.entities.posts,
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    importPostDetail: (postId) => dispatch(importPostDetail(postId)),
    addNewLike: (like) => dispatch(addNewLike(like)),
    unLike: (postId) => dispatch(unLike(postId)),
    closeModal: () => dispatch(closeModal()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openDelete: (postId) => dispatch(openDelete(postId)),
    closeDelete: (postId) => dispatch(closeDelete(postId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageDetailItem));
