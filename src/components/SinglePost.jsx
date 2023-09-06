import { useState } from "react";
import UserInfo from "./UserInfo";
import UserPostText from "./UserPostText";
import LikePost from "./PostButtons";
import { IoMdHeart } from "react-icons/io";
import { LiaCommentAlt } from "react-icons/lia";

export default function SinglePost({ isProfilePage }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    if (isProfilePage) {
      setIsHover(true);
    }
  };

  const handleMouseOut = () => {
    if (isProfilePage) {
      setIsHover(false);
    }
  };

  return (
    <div
      className={` ${
        isProfilePage
          ? "w-[320px] h-[320px] relative cursor-pointer"
          : "flex flex-col w-[500px] h-[650px] mt-1 mx-5   rounded-lg "
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>{!isProfilePage && <UserInfo />}</div>
      <div className="post-image-container">
        <img src="../../src/assets/post.jpg" alt="" />
      </div>

      {isHover && (
        <div className="w-[100%] h-[100%] bg-black opacity-50  flex items-center justify-center gap-3 text-2xl text-white absolute top-0 left-0">
          <div className="flex flex-row items-center justify-center gap-2 ">
            <IoMdHeart /> <span>200</span>
          </div>
          <div className="flex fill flex-row items-center justify-center gap-2">
            <LiaCommentAlt />
            <span>12</span>
          </div>
        </div>
      )}

      {!isProfilePage && (
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center">
            <LikePost />
          </div>
          <div className="save-post">
            <img src="" alt="" />
          </div>
        </div>
      )}
      {!isProfilePage && <UserPostText />}
    </div>
  );
}
