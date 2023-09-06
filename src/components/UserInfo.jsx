import { useState } from "react";
import ShortUserInfo from "./ShortUserInfo";

export default function UserInfo({ username }) {
  username = "averine.mclean";
  const [isUsernameHovered, setIsUsernameHovered] = useState(false);

  const handleUsernameMouseEnter = () => {
    setTimeout(() => {
      setIsUsernameHovered(true);
    }, 0);
  };

  const handleUsernameMouseLeave = () => {
    setTimeout(() => {
      setIsUsernameHovered(false);
    }, 0);
  };

  return (
    <div
      className="flex flex-row items-center cursor-pointer w-[150px] h-[50px] mb-2"
      onMouseEnter={handleUsernameMouseEnter}
      onMouseLeave={handleUsernameMouseLeave}
    >
      <div className="">
        <img
          src="../../src/assets/profile.jpg"
          className="rounded-full mt-4 mb-4 h-9 w-9 "
          alt=""
        />
      </div>
      <div className="flex flex-col ml-2">
        <div className="text-base">{username}</div>
      </div>
      {isUsernameHovered && <ShortUserInfo />}
    </div>
  );
}
