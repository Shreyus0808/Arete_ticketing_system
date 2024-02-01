import React from "react";
import img1 from "../images/image 2.png";
import img2 from "../images/image 3.png";
import img3 from "../images/image 4.png";
import img4 from "../images/image 6.png";

function Sidebar() {
  return (
    <div className="bg-white z-50 shadow-lg shadow-gray-400">
      <div className="h-20 w-56 ">
        <div className=" py-6 text-center flex justify-center  bg-[#40E0D0]">
          <p className=" border-y-4 w-fit text-2xl border-black font-bold text-center tracking-[20px]">
            ARETE
          </p>
        </div>
        <div className="text-center flex flex-col font-League font-semibold space-y-2 text-lg mt-4 ">
          <button class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200">
            <img src={img1} className="p-3 w-12 h-12"></img>Dashboard
          </button>
          <button class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200">
            <img src={img2} className="p-3  w-12 h-12"></img>Tickets
          </button>
          <button class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200">
            <img src={img3} className="p-3  w-12 h-12"></img>Notification
          </button>
          <button class="py-1 px-2 inline-flex items-center mx-3 rounded-xl transition-all duration-200 text-sm font-bold  hover:bg-gray-200">
            <img src={img4} className="p-3  w-12 h-12"></img>Setting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
