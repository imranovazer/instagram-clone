import SearchBar from "../components/SearchBar";
import { GrHomeRounded } from "react-icons/gr";
import { CgMathPlus } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { BiLogOut, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/reducers/userSlice";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <Link to="/profile">{user.username}</Link>,
      icon: <BiUser />,
    },
    {
      key: "2",
      label: (
        <p
          onClick={() => {
            dispatch(logoutUser());
            navigate("/login");
          }}
        >
          Logout
        </p>
      ),
      icon: <BiLogOut />,
    },
  ];
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
        <Dropdown menu={{ items }}>
          <img
            className="w-8 h-8 rounded-full"
            src="../../src/assets/profile.jpg"
            alt="Profile"
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
