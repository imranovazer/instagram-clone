import UserInfo from "./UserInfo";

export default function ShortUserInfo() {
  const username = "averine.mclean";

  return (
    <div className="absolute flex z-99 ">
      <div className=" mt-[300px] ml-[35px] flex flex-col bg-white rounded-md w-[350px] h-[300px] pl-5  pr-5  pt-2  pb-5 ">
        <img
          src="../../src/assets/profile.jpg"
          className="rounded-full mt-4 mb-4 h-16 w-16"
          alt=""
        />
        <div className="text-base">{username}</div>
        <div className=" text-sm text-gray-500">Averie Mclean</div>
        <div className="w-[300px] h-[200px] rounded-md bg-gray-300  mt-5 self-center"></div>
      </div>
    </div>
  );
}
