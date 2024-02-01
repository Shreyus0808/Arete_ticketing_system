import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

function Dashboard() {
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
          <div className="bg-white p-2 rounded-xl divide-y-4">
            <div>
              <p className="text-2xl font-bold p-6 ">Hi</p>
              <p className="text-6xl pl-5 font-extrabold text-[#40E0D0]">
                John Doe!
              </p>
            </div>
            <p className=" p-6 font-semibold text-sm pl-5">
              Welcome back to Arete. Hope you are having a nice day.
            </p>
          </div>
          <div className="pt-6">
            <div className="bg-white p-2 rounded-xl divide-y-4">
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
                  <p className="text-gray-300 pt-3 w-44">YOUR MONTHLY SCORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
