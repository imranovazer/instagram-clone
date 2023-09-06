import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";

function ProtectedRoute({ shouldAuth }) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  // Assuming you have a variable called 'isAuth' that determines if the user is authenticated or not
  if (loading) {
    return <Loading />;
  } else {
    if (shouldAuth) {
      return isAuth ? <Outlet /> : <Navigate to="/login" />;
    } else if (!shouldAuth) {
      return !isAuth ? <Outlet /> : <Navigate to="/" />;
    }
  }
}

export default ProtectedRoute;
