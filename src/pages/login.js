import React from "react";
import { Button } from "react-scroll";
import logo from "../images/1.png";

const login = () => {
  return (
    <div className="bg-[#40E0D0] w-screen h-screen">
      <div className="w-screen h-screen flex items-center justify-center ">
        <div className="w-full flex justify-center items-center">
          <img src={logo} className="animate-pulse"></img>
          <div className="space-x-4">
            <button className="border h-16 hover:text-[#40E0D0] bg-white w-40 font-semibold rounded-2xl">
              Login as Admin
            </button>
            <button className="border h-16 hover:text-[#40E0D0] w-40 font-semibold bg-white rounded-2xl">
              Login as User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
