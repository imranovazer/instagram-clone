import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";

function Sidebar() {
  const userData = useSelector((state) => state?.userData?.data);
  const userName = useSelector((state) => state?.userData?.data?.username);
  const userSubscriptions = useSelector(
    (state) => state?.userData?.data?.subscriptions
  );

  return (
    <div className="fixed right-[280px] mt-1 p-2">
      <UserInfo userName={userName} isYourProfile={true} />
      <div className="w-[300px] h-[300px]  mt-4 border-2 border-gray-200 rounded-md p-3">
        <div className="mb-2">Following</div>
        {userSubscriptions &&
          userSubscriptions.map((user, index) => (
            <UserInfo key={index} userName={user.username} />
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
