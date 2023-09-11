import AllPosts from "../components/AllPosts";
import UserProfileDetails from "../components/UserProfileDetails";
function ProfilePage() {
  const username = localStorage.getItem("username");
  return (
    <div>
      <UserProfileDetails
        isFollowingPage={false}
        isProfile={true}
        userName={username}
      />
      <AllPosts isProfilePage={true} />
    </div>
  );
}
export default ProfilePage;
