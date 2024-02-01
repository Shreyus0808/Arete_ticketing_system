import React from "react";
import img1 from "../images/image 2.png";
import img2 from "../images/image 3.png";
import img3 from "../images/image 4.png";
import img4 from "../images/image 6.png";

function Sidebar() {
  return (
    <div className="bg-white z-50">
      <div className="h-20 w-56 ">
        <div className=" py-6 text-center flex justify-center  bg-[#40E0D0]">
          <p className=" border-y-4 w-fit text-2xl border-black tracking-[20px]">
            ARETE
          </p>
        </div>
        <div className="text-center flex flex-col font-League font-semibold  text-lg  ">
          <button class="py-4 border inline-flex items-center hover:bg-gray-200">
            <img src={img1} className="p-3"></img>Dashboard
          </button>
          <button class="py-4 border flex items-center hover:bg-gray-200">
            <img src={img2} className="p-3"></img>Tickets
          </button>
          <button class="py-4 border flex items-center  hover:bg-gray-200">
            <img src={img3} className="p-3"></img>Notification
          </button>
          <button class="py-4 border flex items-center hover:bg-gray-200">
            <img src={img4} className="p-3"></img>Setting
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
