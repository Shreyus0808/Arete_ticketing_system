import React, { useState, useEffect } from "react";
import img1 from "../images/image 2.png";
import img2 from "../images/image 3.png";
import img3 from "../images/image 4.png";
import img4 from "../images/image 6.png";
import img6 from "../images/image 6 (1).png";
import logo from "../images/1.png";

function Sidebar() {
  const [userType, setUserType] = useState("admin");
  return (
    <div className="bg-white z-50 shadow-lg shadow-gray-400">
      <div className="h-20 w-56 ">
        <div className="  text-center flex justify-center  bg-[#40E0D0]">
          <img src={logo} className="w-28 h-28 scale-125"></img>
        </div>
        <div className="text-center flex flex-col font-League font-semibold space-y-2 text-lg mt-4 ">
          <a
            href="/"
            class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200"
          >
            <img src={img1} className="p-3 w-12 h-12"></img>Dashboard
          </a>
          <a
            href="/tickets"
            class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200"
          >
            <img src={img2} className="p-3  w-12 h-12"></img>Tickets
          </a>
          <a
            href="/notifications"
            linl
            class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200"
          >
            <img src={img3} className="p-3  w-12 h-12"></img>Notification
          </a>
          {userType === "admin" && (
            <a
              href="/analysis"
              class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200"
            >
              <img src={img6} className="p-3  w-12 h-12"></img>Analysis
            </a>
          )}
          <a
            href="/"
            class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200"
          >
            <img src={img4} className="p-3  w-12 h-12"></img>Setting
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
