import { useSelector } from "react-redux";

export default function ShortUserInfo({ userName }) {
  const userData = useSelector((state) => state.userData.data);

  return (
    <div className="absolute flex z-10">
      <div className=" mt-[300px] ml-[35px] flex flex-col bg-white rounded-md w-[350px] h-[300px] pl-5  pr-5  pt-2  pb-5 ">
        <img
          src="../../src/assets/profile.jpg"
          className="rounded-full mt-4 mb-4 h-16 w-16"
          alt=""
        />
        <div className="text-base">
          <span>username</span>
        </div>
        <div className=" text-sm text-gray-500">{userName}</div>
        <div className="w-[300px] h-[200px] rounded-md bg-gray-300  mt-5 self-center"></div>
      </div>
    </div>
  );
}
