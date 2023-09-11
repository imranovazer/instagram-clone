import { useSelector } from "react-redux";
import UserProfileDetails from "./UserProfileDetails";

export default function ShortUserInfo({ userName }) {
  const homeFeed = useSelector((state) => state?.homeFeed?.data);

  return (
    <div className="absolute flex flex-col z-10 items-center justify-center">
      <div className=" mt-[70px] ml-[20px] flex flex-col bg-white rounded-md w-[390px] h-[230px] z-10 border border-slate-200">
        <UserProfileDetails userName={userName} hover={true} />
        <div className="self-center font-bold mt-3">
          <span>Click to go to the Profile!</span>
        </div>
      </div>
    </div>
  );
}
