import { useState } from "react";
import ShortUserInfo from "./ShortUserInfo";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function UserInfo({ userName }) {
=======
export default function UserInfo({ userName, isYourProfile }) {
>>>>>>> new-components
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
<<<<<<< HEAD
    <div
      className="flex flex-row items-center cursor-pointer w-[150px] h-[50px] mb-2 z-50"
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
        <div className="text-base">{userName}</div>
      </div>
      {isUsernameHovered && <ShortUserInfo userName={userName} />}
    </div>
=======
    <Link to={isYourProfile ? `${"/profile"}` : `${`/following/${userName}`}`}>
      <div
        className="flex flex-row items-center cursor-pointer w-[150px] h-[50px] mb-2 z-50"
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
          <div className="text-base">{userName}</div>
        </div>
        {isUsernameHovered && <ShortUserInfo userName={userName} />}
      </div>
    </Link>
>>>>>>> new-components
  );
}
