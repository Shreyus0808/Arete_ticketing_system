import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

function Dashboard() {
  const [userType, setUserType] = useState("admin");

  return (
    <>
      <div className="w-full h-screen p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]">
        <div className="flex justify-between pb-1.5">
          <h2 className=" font-sans font-bold text-3xl text-[#AAAAAA]">
            Dashboard
          </h2>
          <img src={user} className="w-10 h-10 z-10"></img>
        </div>
        <div className="flex flex-col  justify-between px-0 p-4 ">
          <div className="bg-white  rounded-xl divide-y-4 p-6 py-10">
            <div>
              <p className="text-2xl font-bold py-2 ">Hi</p>
              <p className="text-6xl  font-extrabold text-[#40E0D0] py-5">
                John Doe!
              </p>
            </div>
            <p className=" font-semibold text-sm py-5 ">
              Welcome back to Arete. Hope you are having a nice day.
            </p>
          </div>
          <div className="pt-6">
            {userType === "user" && (
              <div className="bg-white p-2 rounded-xl divide-y-4 pb-20">
                <div>
                  <p className="text-base font-semibold p-6 tracking-tight ">
                    Your Monthly Report
                  </p>
                </div>
                <div className="grid grid-cols-3 pt-10">
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">24</p>
                    <p className="text-gray-300 pt-3 w-44">
                      TICKETS CLOSED THIS MONTH
                    </p>
                  </div>
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">06</p>
                    <p className="text-gray-300 pt-3 w-44">PENDING TICKET</p>
                  </div>
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">80%</p>
                    <p className="text-gray-300 pt-3 w-44">
                      YOUR MONTHLY SCORE
                    </p>
                  </div>
                </div>
              </div>
            )}
            {userType === "admin" && (
              <div className="bg-white p-2 rounded-xl divide-y-4 pb-20">
                <div>
                  <p className="text-base font-semibold p-6 tracking-tight ">
                    Company's Monthly Report
                  </p>
                </div>
                <div className="grid grid-cols-3 pt-10">
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">24</p>
                    <p className="text-gray-300 pt-3 w-44">
                      PROJECTS CURRENTLY WORKING ON
                    </p>
                  </div>
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">06 cr</p>
                    <p className="text-gray-300 pt-3 w-44">
                      REVENUE GENERATED THIS MONTH
                    </p>
                  </div>
                  <div className="text-center flex items-center flex-col">
                    <p className="text-7xl font-extrabold">80%</p>
                    <p className="text-gray-300 pt-3 w-44">
                      ROI (RETURN ON INVESTMENT)
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p className="text-center pt-10 text-gray-400 text-xs flex justify-center">
              <svg
                className="w-5 h-5 mx-2 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              ARETE powered by Lighthouse Labs 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
