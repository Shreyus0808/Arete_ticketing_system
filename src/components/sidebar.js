import React from "react";

function Sidebar() {
  return (
    <div className="">
      <div className="h-20 w-56">
        <div className=" py-6 text-center flex justify-center  bg-[#40E0D0]">
          <p className=" border-y-4 w-fit text-2xl border-black tracking-[20px]">
            ARETE
          </p>
        </div>
        <div className="text-center flex flex-col font-league font-semibold spartan">
          <button class="pt-10 pb-2 ">Dashboard</button>
          <button class="pt-10 pb-2 ">Ticket</button>
          <button class="pt-10 pb-2 ">Notification</button>
          <button class="pt-10 pb-2 ">Setting</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
