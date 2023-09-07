import HomePage from "../pages/Home";
import Login from "../pages/Login/Login";
import ProfilePage from "../pages/Profile";
import Register from "../pages/Register/Register";

export const publicRoutes = [
  {
    key: 1,
    path: "/login",
    element: <Login />,
  },
  {
    key: 2,
    path: "/register",
    element: <Register />,
  },
];
export const protectedRoutes = [
  {
    key: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    key: 2,
    path: "/profile",
    element: <ProfilePage />,
  },
];
