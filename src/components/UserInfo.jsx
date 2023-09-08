import { useEffect, useState } from "react";
import ShortUserInfo from "./ShortUserInfo";
import { Link } from "react-router-dom";

export default function UserInfo({ userName, isYourProfile }) {
  const [isUsernameHovered, setIsUsernameHovered] = useState(false);
  const [randomImage, setRandomImage] = useState("");

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

  useEffect(() => {
    async function getRandomHumanProfile() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (response.ok) {
          const data = await response.json();
          const randomUser = data.results[0];
          setRandomImage(randomUser.picture.large);
        } else {
          throw new Error("Failed to fetch random user profile");
        }
      } catch (error) {
        console.error(error);
        setRandomImage("default-image-url.jpg");
      }
    }

    getRandomHumanProfile();
  }, []);

  return (
    <Link to={isYourProfile ? `${"/profile"}` : `${`/following/${userName}`}`}>
      <div
        className="flex flex-row items-center cursor-pointer w-[150px] h-[50px] mb-2 z-50"
        onMouseEnter={handleUsernameMouseEnter}
        onMouseLeave={handleUsernameMouseLeave}
      >
        <div className="">
          <img
            src={randomImage}
            className="rounded-full mt-4 mb-4 h-9 w-9"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-base">{userName}</div>
        </div>
        {isUsernameHovered && <ShortUserInfo userName={userName} />}
      </div>
    </Link>
  );
}
