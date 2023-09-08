import HomePage from "../pages/Home";
import Login from "../pages/Login/Login";
import ProfilePage from "../pages/Profile";
import Register from "../pages/Register/Register";
<<<<<<< HEAD
=======
import FollowingProfile from "../pages/FollowingProfile";
>>>>>>> new-pages

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
<<<<<<< HEAD
=======
  {
    key: 3,
    path: "/following/:username",
    element: <FollowingProfile />,
  },
>>>>>>> new-pages
];
