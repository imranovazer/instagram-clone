import React from "react";
import Logo from "../utils/logo.png";
import { Link } from "react-router-dom";
function AuthorizationLayout({ children, login }) {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col gap-8 items-center justify-center min-h-screen">
        <div className="sm:w-[350px] w-full py-5  sm:border sm:shadow-lg border-gray-300 flex flex-col gap-8 px-10 items-center">
          <img src={Logo} alt="logo" className="w-[174px] " />

          <div className="flex flex-col w-full items-center">{children}</div>
        </div>
        <div className="sm:w-[350px] w-full p-5  sm:border sm:shadow-lg border-gray-300 flex flex-col gap-8 px-5 items-center">
          {login ? (
            <p>
              Don't have an account?{" "}
              <Link className="text-blue-600" to="/register">
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Have an account?{" "}
              <Link className="text-blue-600" to="/login">
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthorizationLayout;
