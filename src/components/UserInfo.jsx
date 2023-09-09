import { useEffect, useState } from "react";
import ShortUserInfo from "./ShortUserInfo";
import { Link } from "react-router-dom";

export default function UserInfo({ userName, isYourProfile }) {
  const [isUsernameHovered, setIsUsernameHovered] = useState(false);
  const [randomImage, setRandomImage] = useState("");

  const handleUsernameMouseEnter = () => {
    setIsUsernameHovered(true);
  };

  const handleUsernameMouseLeave = () => {
    setIsUsernameHovered(false);
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
          throw new Error("Failed to fetch a random user profile");
        }
      } catch (error) {
        console.error(error);
        setRandomImage("default-image-url.jpg");
      }
    }

    getRandomHumanProfile();
  }, []);

  return (
    <Link
      to={isYourProfile ? "/profile" : `/following/${userName}`}
      onMouseEnter={handleUsernameMouseEnter}
      onMouseLeave={handleUsernameMouseLeave}
    >
      <div className="relative w-[150px] h-[50px] flex items-center cursor-pointer">
        <div>
          <img
            src={randomImage}
            className={`rounded-full h-9 w-9 transition-all duration-300 ${
              isUsernameHovered
                ? "opacity-70 scale-105 hover:opacity-100 hover:scale-100"
                : "opacity-100 scale-100 hover:opacity-70 hover:scale-105"
            }`}
            alt=""
          />
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-base">{userName}</div>
        </div>
        {isUsernameHovered && (
          <div className="opacity-0 scale-95 absolute top-0 left-0 z-10 transition-all duration-300 hover:opacity-100 hover:scale-100">
            <ShortUserInfo userName={userName} />
          </div>
        )}
      </div>
    </Link>
  );
}
