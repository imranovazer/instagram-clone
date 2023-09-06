export default function UserProfileDetails() {
  return (
    <div className="main">
      <div className="p-1 mt-5 flex items-center justify-center flex-row">
        <div className="image-container">
          <img
            className="rounded-full h-[150px]	w-[150px] mt-4 mb-4 mr-[80px]"
            src="../../src/assets/profile.jpg"
            alt=""
          />
        </div>
        <div className="infos-container">
          <div className="flex flex-row items-center">
            <div className="m-1 text-2xl">averine.mclean</div>
            <div className="m-4">
              <button className="m-1 bg-slate-100 rounded-lg	p-1 w-[100px]">
                Follow
              </button>
              <button className="m-1 bg-slate-100 rounded-lg	p-1 w-[50px]">
                *
              </button>
              <button className="m-1  rounded-lg	p-1">...</button>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="m-2">
              <span className="font-bold mr-1">32</span>
              <span>Posts</span>
            </div>
            <div className="m-2">
              <span className="font-bold mr-1">233</span>
              <span>Followers</span>
            </div>
            <div className="m-2">
              <span className="font-bold mr-1">300</span>
              <span>Following</span>
            </div>
          </div>
          <div className="ml-2 mt-2 flex items-center">
            <span className="font-bold	">Averie Mclean</span>
          </div>
          <div className="ml-2 mt-2 flex items-center">
            <span>
              Followed by <span className="font-bold">zuck, zack,</span> and 3
              others
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
