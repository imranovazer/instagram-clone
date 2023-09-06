import SearchBar from "../components/SearchBar";
import { GrHomeRounded } from "react-icons/gr";
import { CgMathPlus } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto px-6 flex justify-between items-center ">
      <div>
        <Link to={"/"}>
          <img
            src="../src/utils/logo.png"
            alt="Instagram Logo"
            width={150}
            className="select-none"
          />
        </Link>
      </div>
      <SearchBar />
      <div className="flex items-center justify-between flex-row gap-4">
        <Link to={"/"}>
          <GrHomeRounded className="text-2xl " />
        </Link>
        <CgMathPlus className="text-3xl" />
        <Link to={"/profile"}>
          <img
            className="w-8 h-8 rounded-full"
            src="../../src/assets/profile.jpg"
            alt="Profile"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
