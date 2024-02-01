import React from "react";

function Sidebar() {
  return (
    <div className="">
      <div className="h-screen w-60">
        <div className=" py-6 text-center flex justify-center bg-[#40E0D0]">
          <p className=" border-y-4 w-fit s border-black tracking-widest">
            ARETE
          </p>
        </div>
        <div className="text-center flex flex-col">
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
