import AllPosts from "../components/AllPosts";
import Sidebar from "../components/Sidebar";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 items-start justify-center flex-row">
      <Sidebar />
      <AllPosts />
    </div>
  );
}
