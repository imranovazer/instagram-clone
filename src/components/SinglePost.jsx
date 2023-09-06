import UserInfo from "./UserInfo";
import UserPostText from "./UserPostText";
import PostButtons from "./PostButtons";

export default function SinglePost() {
  return (
    <div className="flex flex-col w-[500px] h-[650px] mt-1 mx-5 rounded-lg">
      <UserInfo />
      <div className="post-image-container">
        <img src="../../src/assets/post.jpg" alt="User Post" />
      </div>
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center">
          <PostButtons />
        </div>
        <div className="save-post">
          <img src="" alt="" />
        </div>
      </div>
      <UserPostText />
    </div>
  );
}
