import UserProfileDetails from "../components/UserProfileDetails";
import AllPosts from "../components/AllPosts";
import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { commentPost, deleteComment, getUserInfo } from "../api";
import Loading from "../components/Loading";
import { AlertContex } from "../layouts/AlertLayout";
import { useSelector } from "react-redux";

function FollowingProfile() {
  const me = useSelector((state) => state.user.user.username);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const { displayAlert } = useContext(AlertContex);
  const handleCommentDelete = async (postId, commentId) => {
    try {
      await deleteComment(commentId);
      setUserData((prevState) => {
        const newUser = {
          ...prevState,
          posts: prevState.posts.map((post) => {
            if (postId === post.postId) {
              return {
                ...post,
                comments: post.comments.filter(
                  (comment) => comment.commentId !== commentId
                ),
              };
            } else {
              return post;
            }
          }),
        };
        return newUser;
      });
      displayAlert(true, "Comment deleted successfully");
    } catch (error) {
      displayAlert(false, "Unable to delete comment");
    }
  };

  const handleCommentPost = async (postId, text) => {
    try {
      const res = await commentPost({ postId, text });
      setUserData((prevState) => {
        const newUser = {
          ...prevState,
          posts: prevState.posts.map((post) => {
            if (postId === post.postId) {
              return {
                ...post,
                comments: [...post.comments, { authorUsername: me, text }],
              };
            } else {
              return post;
            }
          }),
        };
        return newUser;
      });

      displayAlert(true, "Comment added successfully");
    } catch (error) {
      displayAlert(false, "Unable to add comment");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUserInfo(username);
        setUserData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <UserProfileDetails
        isFollowingPage={true}
        firstName={userData?.firstName}
        lastName={userData?.lastName}
        userName={userData?.username}
        postsLength={userData?.posts?.length}
      />
      <AllPosts
        handleCommentPost={handleCommentPost}
        handleCommentDelete={handleCommentDelete}
        isFollowingPage={true}
        followingUserPosts={userData.posts}
      />
    </div>
  );
}

export default FollowingProfile;
