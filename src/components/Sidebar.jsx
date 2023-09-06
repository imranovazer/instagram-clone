import UserInfo from "./UserInfo";

function Sidebar() {
  return (
    <div className="fixed right-[280px] mt-1 p-2 ">
      <UserInfo />
      <div className="w-[300px] h-[200px] overflow-y-auto mt-4 border-2 border-gray-200 rounded-md p-3">
        <div className="mb-2">Following</div>
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
      <div className="w-[300px] mt-4 border-2 border-gray-200 rounded-md p-3">
        <div className="mb-2">Suggestions</div>
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
    </div>
  );
}

export default Sidebar;
