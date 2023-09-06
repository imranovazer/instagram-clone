import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/reducers/userSlice";

function AuthProvider({ children }) {
  //const isAuth = useAppSelector((state) => state.user.isAuth);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  // return <>{loading ? isAuth ? <div>Loading...</div> : children : children}</>;
  return <>{loading ? <h1>Loading...</h1> : children}</>;
}

export default AuthProvider;
