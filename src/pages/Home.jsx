import AllPosts from "../components/AllPosts";
import Sidebar from "../components/Sidebar";

import { useContext, useEffect, useState } from "react";
import {
  commentPost,
  deleteComment,
  getUserFeed,
  likePost,
  removeLike,
} from "../api";
import Loading from "../components/Loading";
import { AlertContex } from "../layouts/AlertLayout";
import { useSelector } from "react-redux";

export default function HomePage() {
  const username = useSelector((state) => state?.user?.user?.username);
  const { displayAlert } = useContext(AlertContex);
  const [homeFeed, setHomeFeed] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleCommentDelete = async (postId, commentId) => {
    try {
      await deleteComment(commentId);
      setHomeFeed((prevState) => {
        const newHomeFeed = prevState.map((post) => {
          if (postId === post.postId) {
            const newComments = post.comments.filter(
              (comment) => comment.commentId !== commentId
            );
            return {
              ...post,
              comments: newComments,
            };
          } else {
            return post;
          }
        });
        return newHomeFeed;
      });
      displayAlert(true, "Comment deleted successfully");
    } catch (error) {
      displayAlert(false, "Unable to delete comment");
    }
  };

  const handleCommentPost = async (postId, text) => {
    try {
      const res = await commentPost({ postId, text });

      setHomeFeed((prevState) => {
        const newHomeFeed = prevState.map((post) => {
          if (postId === post.postId) {
            return {
              ...post,
              comments: [...post.comments, { authorUsername: username, text }],
            };
          } else {
            return post;
          }
        });
        return newHomeFeed;
      });
      displayAlert(true, "Comment added successfully");
    } catch (error) {
      displayAlert(false, "Unable to add comment");
    }
  };

  const handleDislikePost = async (postId) => {
    try {
      const res = await removeLike(postId);
      setHomeFeed((prevState) => {
        const newHomeFeed = prevState.map((post) => {
          if (postId === post.postId) {
            const newLikes = post.likes.filter(
              (like) => like.authorUsername !== username
            );
            return {
              ...post,
              likes: newLikes,
            };
          } else {
            return post;
          }
        });
        return newHomeFeed;
      });
      displayAlert(true, "Post disliked successfully");
    } catch (error) {
      displayAlert(false, "Unable to dislike post");
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const res = await likePost(postId);

      setHomeFeed((prevState) => {
        const newHomeFeed = prevState.map((post) => {
          if (postId === post.postId) {
            return {
              ...post,
              likes: [...post.likes, { authorUsername: username }],
            };
          } else {
            return post;
          }
        });
        return newHomeFeed;
      });

      displayAlert(true, "Post liked successfully");
    } catch (error) {
      displayAlert(false, "Unable to like post");
    }
  };
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getUserFeed();
      setHomeFeed(data.data);
      setLoading(false);
    };
    getData();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="container mx-auto px-6 flex  ">
      <div className="max-w-[300px] w-full hidden md:block"></div>
      <AllPosts
        handleCommentDelete={handleCommentDelete}
        handleCommentPost={handleCommentPost}
        handleDislikePost={handleDislikePost}
        handleLikePost={handleLikePost}
        homeFeed={homeFeed}
      />
      <Sidebar isMyProfile={true} />
    </div>
  );
}
