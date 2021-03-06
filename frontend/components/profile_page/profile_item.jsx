import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserPostIndexItem from './user_post_index_items';
import EditFollowButton from './edit_follow_button';
import ProfileAvatar from './profile_avatar';


class ProfileItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  render() {
    const {
      user,
      posts,
      currentUser,
      addNewFollow,
      unFollow,
      updateUserAvatar
    } = this.props;

    if (this.props.user) {

      const userPostIndexItems = posts.map((post) => <UserPostIndexItem
      key={post.id}
      postId={post.id}
      post={post}
      imageThumb={post.imageThumb}
      userId={user.id}
      />);


      return (
        <div className="UserProfile" >
          <div className="upMain" >
            <section className="upMainInfo" >

              <div className="upAvatarCush">
                <div className="upAvatarContain" >
                  <ProfileAvatar
                    user={user}
                    currentUser={currentUser}
                    updateUserAvatar={updateUserAvatar}
                  />
                </div>
              </div>

              <section className="upInfo">
                <section className="upInfoTop">
                  <p className="userName" >{user.username}</p>
                  <EditFollowButton className="editFollow"
                    currentUser={currentUser}
                    user={user}
                    addNewFollow={addNewFollow}
                    unFollow={unFollow}
                  />
                </section>

                <section className="upInfoMid" >
                  <div className="upCount" >
                    <span className="upCountNum" >{posts.length}</span>
                    <span
                      className="upCountText"
                      >{posts.length === 1 ? " post": " posts"}
                    </span>
                  </div>
                  <div className="upCount" >
                    <span
                      className="upCountNum"
                      >{user.followerIds.length}
                    </span>
                    <span
                      className="upCountText"
                      >{user.followerIds.length === 1 ?
                        " follower": " followers"}
                    </span>
                  </div>
                  <div className="upCount" >
                    <span
                      className="upCountNum"
                      >{user.followeeIds.length}
                    </span>
                    <span className="upCountText" > following</span>
                  </div>
                </section>

                <section className="upInfoBottom" >
                    <p className="upName" >{user.name}</p>
                    <span className="upBio" >{user.bio}</span>
                </section>
              </section>

            </section>

            <section className="upPostIndex" >
                  {userPostIndexItems}
            </section>

          </div>
      </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }



}

export default ProfileItem;
