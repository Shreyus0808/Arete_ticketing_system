import React from "react";
import { Button } from "react-scroll";
import logo from "../images/1.png";

const login = () => {
  return (
    <div className="bg-[#40E0D0] w-screen h-screen">
      <div className="w-screen h-screen flex items-center justify-center ">
        <div className="w-full flex justify-center items-center">
          <img src={logo} className="animate-pulse"></img>
          <div className="space-x-10">
            <a href="/" className="h-16 hover:text-white font-bold text-2xl">
              Login as Admin
            </a>
            <a
              href="/"
              className=" h-16 hover:text-white  font-bold text-2xl  "
            >
              Login as User
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
