import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/reducers/userSlice";
import Loading from "./Loading";

function AuthProvider({ children }) {
  //const isAuth = useAppSelector((state) => state.user.isAuth);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  // return <>{loading ? isAuth ? <div>Loading...</div> : children : children}</>;
  return <>{loading ? <Loading /> : children}</>;
}

export default AuthProvider;
