import { useSelector } from "react-redux";
import usersList from "../data/users";
import UserInfo from "./UserInfo";
function Sidebar({ isMyProfile }) {
  const me = useSelector((state) => state?.user?.user.username);

  const userSubscriptions = useSelector(
    (state) => state?.user?.user?.subscriptions
  );

  const checkIfSubscribe = (username) => {
    let isIn = false;
    userSubscriptions.forEach((item) => {
      if (item.username === username || username === me) {
        isIn = true;
      }
    });

    return isIn;
  };
  return (
    <div className="  mt-1 p-2 hidden lg:block ">
      <div className="w-[300px] mt-4 border-2 border-gray-200 rounded-md p-3">
        <div className="mb-2">Following</div>
        {userSubscriptions &&
          userSubscriptions.map((user, index) => (
            <UserInfo key={index} userName={user.username} />
          ))}
      </div>
      <div className="w-[300px] mt-4 border-2 border-gray-200 rounded-md p-3">
        <div className="mb-2">You might know </div>
        {usersList &&
          usersList.map(
            (user, index) =>
              !checkIfSubscribe(user.username) && (
                <UserInfo key={index} userName={user.username} />
              )
          )}
      </div>
    </div>
  );
}
export default Sidebar;
