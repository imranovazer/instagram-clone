import { BsGrid3X3 } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";

import SinglePost from "./SinglePost";

function AllPosts({ isProfilePage }) {
  return (
    <div className="container mx-auto w-[70vw] items-center justify-between  pb-6">
      {isProfilePage && (
        <div className="flex items-center justify-center gap-10 pt-6 cursor-pointer">
          <BsGrid3X3 className="text-2xl" />
          <LiaUserTagSolid className="text-3xl" />
        </div>
      )}
      <div className="flex flex-wrap flex-row gap-10 items-center justify-between mt-8">
        <SinglePost isProfilePage={isProfilePage} />
        <SinglePost isProfilePage={isProfilePage} />
        <SinglePost isProfilePage={isProfilePage} />
        <SinglePost isProfilePage={isProfilePage} />
        <SinglePost isProfilePage={isProfilePage} />
        <SinglePost isProfilePage={isProfilePage} />
      </div>
    </div>
  );
}

export default AllPosts;
