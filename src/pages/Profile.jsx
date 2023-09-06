import AllPosts from "../components/AllPosts";
import UserProfileDetails from "../components/UserProfileDetails";
function ProfilePage() {
  return (
    <div>
      <UserProfileDetails />
      <AllPosts isProfilePage={true} />
    </div>
  );
}
export default ProfilePage;
