import { BsGrid3X3 } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import Loading from "./Loading";
import { useState } from "react";
import PostModal from "./PostModal/PostModal";
import { toggleModal } from "../redux/reducers/postModalSlice";

function AllPosts({
  handleDislikePost,
  isProfilePage,
  isFollowingPage,
  followingUserPosts,
  homeFeed,
  handleLikePost,
  handleCommentPost,
  handleCommentDelete,
}) {
  const dispatch = useDispatch();
  const postModal = useSelector((state) => state.postModal.isOpen);
  const userPostData = useSelector((state) => state.user?.user?.posts);

  const [postToView, setPostToView] = useState();

  if (!userPostData) {
    return <Loading />;
  }
  const handleCommentClick = (post) => {
    setPostToView(post);
    dispatch(toggleModal());
  };
  return (
    <div className="container mx-auto max-w-[70vw] items-center justify-between  pb-6">
      {isProfilePage && (
        <div className="flex items-center justify-center gap-10 pt-6 cursor-pointer">
          <BsGrid3X3 className="text-2xl" />
          <LiaUserTagSolid className="text-3xl" />
        </div>
      )}

      <div className="flex flex-wrap flex-row gap-5 items-center justify-between mt-8">
        {/* EDIT_----------------- */}
        {userPostData &&
          isProfilePage &&
          userPostData.map((post, index) => (
            <SinglePost
              handleDislikePost={handleDislikePost}
              handleLikePost={handleLikePost}
              key={index}
              isProfilePage={isProfilePage}
              postData={post}
              handleCommentClick={() => handleCommentClick(post)}
            />
          ))}

        {userPostData &&
          !isProfilePage &&
          !isFollowingPage &&
          homeFeed?.map((post, index) => (
            <SinglePost
              handleDislikePost={handleDislikePost}
              handleLikePost={handleLikePost}
              handleCommentClick={() => handleCommentClick(post)}
              key={index}
              isProfilePage={isProfilePage}
              postData={post}
              homeFeed={homeFeed}
            />
          ))}
        {followingUserPosts &&
          isFollowingPage &&
          followingUserPosts?.map((post, index) => (
            <SinglePost
              handleDislikePost={handleDislikePost}
              handleLikePost={handleLikePost}
              handleCommentClick={() => handleCommentClick(post)}
              key={index}
              isFollowingPage={isFollowingPage}
              postData={post}
            />
          ))}
      </div>
      {postModal && (
        <PostModal
          handleCommentDelete={handleCommentDelete}
          handleCommentPost={handleCommentPost}
          postData={postToView}
          setPostData={setPostToView}
        />
      )}
    </div>
  );
}

export default AllPosts;
