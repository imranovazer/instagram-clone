import { useDispatch, useSelector } from "react-redux";
import AllPosts from "../components/AllPosts";
import Sidebar from "../components/Sidebar";
import { fetchFeed } from "../redux/reducers/homeFeedSlice";
import { useEffect } from "react";

export default function HomePage() {
  const dispatch = useDispatch();
  const homeFeed = useSelector((state) => state.homeFeed.data);

  useEffect(() => {
    if (!homeFeed) {
      dispatch(fetchFeed());
    }
  }, []);
  return (
    <div className="container mx-auto px-6 items-start justify-center flex-row">
      <Sidebar isMyProfile={true} />
      <AllPosts />
    </div>
  );
}
