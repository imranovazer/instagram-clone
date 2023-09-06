import React from "react";

const AuthButton = ({ text }) => {
  return (
    <button className="bg-sky-600 rounded-lg hover:bg-sky-600/90 transition-colors w-full text-white py-1 px-3 font-bold ">
      {text}
    </button>
  );
};

export default AuthButton;
