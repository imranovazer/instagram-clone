import UserProfileDetails from "../components/UserProfileDetails";
import AllPosts from "../components/AllPosts";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FollowingProfile() {
  const userData = useSelector((state) => state.user.user);
  const homeFeed = useSelector((state) => state?.homeFeed?.data);
  const { username } = useParams();

  const usernameToFind = username;

  const subscriptionInfo = userData?.subscriptions?.find(
    (subscription) => subscription.username === usernameToFind
  );

  const followingUserPosts = homeFeed?.filter(
    (post) => post.authorUsername === username
  );
  // console.log(followingUserPosts);

  return (
    <div>
      <UserProfileDetails
        isFollowingPage={true}
        firstName={subscriptionInfo?.firstName}
        lastName={subscriptionInfo?.lastName}
        userName={subscriptionInfo?.username}
        postsLength={followingUserPosts?.length}
      />
      <AllPosts
        isFollowingPage={true}
        followingUserPosts={followingUserPosts}
      />
    </div>
  );
}

export default FollowingProfile;
