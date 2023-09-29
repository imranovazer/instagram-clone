import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { followUser, unfollowUser } from "../redux/reducers/userSlice";
import { useContext } from "react";
import { AlertContex } from "../layouts/AlertLayout";

export default function UserProfileDetails({
  isFollowingPage,
  isProfile,
  userName,
  postsLength,
  hover,
}) {
  const myData = useSelector((state) => state.user.user);
  const { displayAlert } = useContext(AlertContex);
  const selectedFollower = myData?.subscriptions?.filter(
    (item) => item.username == userName
  )[0];
  const dispatch = useDispatch();
  if (!myData) {
    return <Loading />;
  }
  const handleUserFollow = async () => {
    try {
      dispatch(followUser(userName));
      displayAlert(true, "User subscribed!");
    } catch (error) {
      displayAlert(false, "Unable to follow user!");
    }
  };
  const handleUserUnFollow = async () => {
    try {
      dispatch(unfollowUser(userName));
      displayAlert(true, "User unsubscribed!");
    } catch (error) {
      displayAlert(false, "Unable to unsubscribe user!");
    }
  };
  return hover ? (
    <div className="p-3 flex flex-row items-center">
      <div className="mr-5">
        <img
          className="rounded-full w-[70px] h-[70px] "
          src="../../src/assets/profile.jpg"
        />
      </div>
      <div className="infos-container">
        <div className="flex flex-row items-center">
          <div className="text-xl">
            {isFollowingPage
              ? `${userName}`
              : isProfile
              ? `${myData?.username}`
              : `${selectedFollower?.username}`}
          </div>
          <div className="m-4">
            {myData.subscriptions.some((item) => item.username === userName) ? (
              <button className="m-1 bg-slate-100 rounded-lg	p-1 w-[100px]">
                Unfollow
              </button>
            ) : (
              <button className="m-1 bg-slate-100 rounded-lg	p-1 w-[100px]">
                Follow
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <div className="m-2">
            <span className="font-bold mr-1">
              {isFollowingPage ? `${postsLength}` : `${myData?.posts?.length}`}
            </span>
            <span>Posts</span>
          </div>
          {!isFollowingPage && (
            <div className="m-2">
              <span className="font-bold mr-1">
                {myData?.subscribers?.length}
              </span>
              <span>Followers</span>
            </div>
          )}
          {!isFollowingPage && (
            <div className="m-2">
              <span className="font-bold mr-1">
                {" "}
                {myData?.subscriptions?.length}
              </span>
              <span>Following</span>
            </div>
          )}
        </div>
        <div className="ml-1 mt-2 flex items-center">
          <span className="font-bold">
            {isFollowingPage
              ? `${userName}`
              : isProfile
              ? `${myData?.username}`
              : `${selectedFollower?.username}`}
          </span>
        </div>
      </div>
    </div>
  ) : (
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
            <div className="m-1 text-2xl">
              {isFollowingPage
                ? `${userName}`
                : isProfile
                ? `${myData?.username}`
                : `${selectedFollower?.username}`}
            </div>
            <div className="m-4">
              {myData.subscriptions.some(
                (item) => item.username === userName
              ) ? (
                <button
                  onClick={handleUserUnFollow}
                  className="m-1 bg-slate-100 rounded-lg	p-1 w-[100px]"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={handleUserFollow}
                  className="m-1 bg-slate-100 rounded-lg	p-1 w-[100px]"
                >
                  Follow
                </button>
              )}
              <button className="m-1 bg-slate-100 rounded-lg	p-1 w-[50px]">
                *
              </button>
              <button className="m-1  rounded-lg	p-1">...</button>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="m-2">
              <span className="font-bold mr-1">
                {isFollowingPage
                  ? `${postsLength}`
                  : `${myData?.posts?.length}`}
              </span>
              <span>Posts</span>
            </div>
            {!isFollowingPage && (
              <div className="m-2">
                <span className="font-bold mr-1">
                  {myData?.subscribers?.length}
                </span>
                <span>Followers</span>
              </div>
            )}
            {!isFollowingPage && (
              <div className="m-2">
                <span className="font-bold mr-1">
                  {" "}
                  {myData?.subscriptions?.length}
                </span>
                <span>Following</span>
              </div>
            )}
          </div>
          <div className="ml-2 mt-2 flex items-center">
            <span className="font-bold	">
              {isFollowingPage
                ? `${userName}`
                : isProfile
                ? `${myData?.username}`
                : `${selectedFollower?.username}`}
            </span>
          </div>
          {!isFollowingPage && (
            <div className="ml-2 mt-2 flex items-center">
              {myData.subscriptions.length > 0 && (
                <span>
                  Followed by{" "}
                  <span className="font-bold">
                    {myData?.subscriptions[0]?.username},{" "}
                    {myData?.subscriptions[1]?.username}
                  </span>{" "}
                  and {myData?.subscriptions?.length - 2} others
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
