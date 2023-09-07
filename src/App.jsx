import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Layout from "./layouts/Layout";
import { protectedRoutes, publicRoutes } from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/reducers/userDataSlice";
import { useEffect } from "react";
import { fetchFeed } from "./redux/reducers/homeFeedSlice";

function App() {
  const userData = useSelector((state) => state.userData.data);
  const homeFeed = useSelector((state) => state.homeFeed.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) {
      dispatch(fetchUsers("alexbird"));
    }
  }, [userData, dispatch]);

  useEffect(() => {
    if (!homeFeed) {
      dispatch(fetchFeed());
    }
  }, [homeFeed, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute shouldAuth={true} />}>
          <Route element={<Layout />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>
        <Route element={<ProtectedRoute shouldAuth={false} />}>
          {publicRoutes.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="/*" element={<h1>Not found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
