import { BsGrid3X3 } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost";

function AllPosts({ isProfilePage }) {
  const userData = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();

  const userPostData = useSelector((state) => state.userData?.data?.posts);
  const homeFeed = useSelector((state) => state?.homeFeed?.data);

  if (!userPostData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto w-[70vw] items-center justify-between  pb-6">
      {isProfilePage && (
        <div className="flex items-center justify-center gap-10 pt-6 cursor-pointer">
          <BsGrid3X3 className="text-2xl" />
          <LiaUserTagSolid className="text-3xl" />
        </div>
      )}

      <div className="flex flex-wrap flex-row gap-5 items-center justify-between mt-8">
        {userPostData &&
          isProfilePage &&
          userPostData.map((post, index) => (
            <SinglePost
              key={index}
              isProfilePage={isProfilePage}
              postData={post}
            />
          ))}

        {userPostData &&
          !isProfilePage &&
          homeFeed?.map((post, index) => (
            <SinglePost
              key={index}
              isProfilePage={isProfilePage}
              postData={post}
              homeFeed={homeFeed}
            />
          ))}
      </div>
    </div>
  );
}

export default AllPosts;
