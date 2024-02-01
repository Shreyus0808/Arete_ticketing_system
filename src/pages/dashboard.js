import React from "react";

function Dashboard() {
  return (
    <div className="bg-[#E9E9E9] w-full h-screen">
      <h1 className="py-6 text-center flex justify-start text-xl pb-10">
        Dashboard
      </h1>
      <div className="bg-white rounded-2xl">
        <h1 className="text-3xl  pt-10 font-bold pl-5">Hi</h1>
        <h1 className="text-3xl pl-5 text-[#40E0D0] p-4 border-b-4 font-sans font-bold text-6xl ">John Doe!</h1>
        <p className="">
          Welcome back to Arete. Hope you are having a nice day.
        </p>
      </div>
      <div className="bg-white rounded-2xl pt-10">
        <h1 className="text-xl  pl-5">Your Monthly Report</h1>
        <div className="flex">
          <h1>24</h1>
          <p>TICKETS CLOSED THIS MONTH</p>
          <h1>06</h1>
          <p>PENDING TICKETS</p>
          <h1>80%</h1>
          <p>YOUR MONTHLY SCORE</p>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Dashboard;
