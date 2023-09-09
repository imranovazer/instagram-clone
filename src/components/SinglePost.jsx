import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import UserPostText from "./UserPostText";
import LikePost from "./PostButtons";
import { IoMdHeart } from "react-icons/io";
import { LiaCommentAlt } from "react-icons/lia";
import { addLike, removeLike } from "../redux/reducers/postLikesSlice";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

export default function SinglePost({
  isProfilePage,
  postData,
  isFollowingPage,
}) {
  if (!postData) {
    return <Loading />;
  }

  const dispatch = useDispatch();

  const isLikedByAlexBird = postData.likes.some(
    (like) => like.authorUsername === "alexbird"
  );

  const [isHover, setIsHover] = useState(false);
  const [likesCount, setLikesCount] = useState(postData?.likes?.length);
  const [isDoubleClick, setIsDoubleClick] = useState(false);
  const [liked, setLiked] = useState(isLikedByAlexBird);

  useEffect(() => {
    let timer;

    if (isDoubleClick) {
      timer = setTimeout(() => {
        setIsDoubleClick(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isDoubleClick]);

  const handleMouseOver = () => {
    if (isProfilePage || isFollowingPage) {
      setIsHover(true);
    }
  };

  const handleMouseOut = () => {
    if (isProfilePage || isFollowingPage) {
      setIsHover(false);
    }
  };

  const incrementLikes = () => {
    if (!liked) {
      dispatch(addLike(postData.postId));
    }
    setLikesCount(likesCount + 1);
  };

  const decrementLikes = () => {
    if (liked) {
      dispatch(removeLike(postData.postId));
      setLiked(false);
    }

    setLikesCount(likesCount - 1);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setIsDoubleClick(true);
      setLikesCount(likesCount + 1);
      dispatch(addLike(postData.postId));
    }
  };

  const toggleLiked = () => {
    if (liked) {
      decrementLikes();
    } else {
      incrementLikes();
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className={` ${
          isFollowingPage || isProfilePage
            ? "w-[320px] h-[320px] relative cursor-pointer"
            : "flex flex-col w-[500px] mb-1 mx-5 px-5 rounded-lg "
        }`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {!(isProfilePage || isFollowingPage) && (
          <UserInfo userName={postData.authorUsername} />
        )}
        <div className=" relative w-[100%] h-[100%] mt-2 mb-1">
          <img
            onDoubleClick={handleDoubleClick}
            className="object-cover w-full h-full border border-slate-100 rounded-md"
            src={postData?.imageUrl}
            alt="Post Image"
          />

          {isDoubleClick && (
            <div className="select-none absolute top-[30%] left-[35%] flex items-center justify-center text-[100px] animate-fly-away">
              ❤️
            </div>
          )}
        </div>

        {isHover && (
          <div className="w-[100%] h-[100%] bg-black opacity-50  flex items-center justify-center gap-3 text-2xl text-white absolute top-0 left-0">
            <div className="flex flex-row items-center justify-center gap-2 ">
              <IoMdHeart /> <span>{likesCount}</span>
            </div>
            <div className="flex fill flex-row items-center justify-center gap-2">
              <LiaCommentAlt />
              <span>{postData?.comments?.length}</span>
            </div>
          </div>
        )}

        {!(isProfilePage || isFollowingPage) && (
          <div className="flex flex-row items-center ">
            <div className="flex flex-col">
              <LikePost
                liked={liked}
                setLiked={setLiked}
                toggleLiked={toggleLiked}
              />
              <div className="flex font-bold	">
                <span className="mr-1 ">{likesCount}</span>
                <span>likes</span>
              </div>
            </div>
            <div className="save-post">
              <img src="" alt="" />
            </div>
          </div>
        )}

        {!(isProfilePage || isFollowingPage) && <UserPostText /> && (
          <div className="flex flex-col ">
            <span className="text-slate-500	text-sm	mt-1">
              View all: {postData?.comments?.length} comments
            </span>
            <span className="mt-1">{postData?.comments[0]?.text}</span>
            <hr className="mt-5" />
          </div>
        )}
      </div>
    </div>
  );
}
