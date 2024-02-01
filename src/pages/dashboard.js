import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="pt-10 text-center pb-10">
        <button className="border shadow-xl text-3xl w-44 hover:bg-slate-100">
          Add Ticket
        </button>
      </div>
      <div className="grid grid-cols-6  bg-slate-400">
        <div className="text-center ">Project Name </div>
        <div className="text-center">Skills Required </div>
        <div className="text-center">Ticket Description</div>
        <div className="text-center">Ticket Status </div>
        <div className="text-center">Priority</div>
        <div className="text-center">ETA </div>
      </div>
      <div className="grid grid-cols-6 pt-5">
        <div className="text-center">Happy Homes </div>
        <div className="text-center">Mern Stack </div>
        <div className="text-center">
          Logbook module, documentation and handover report
        </div>
        <div className="text-center">Ongoing</div>
        <div className="text-center">High</div>
        <div className="text-center">12-02-2024 </div>
      </div>
      <div className="grid grid-cols-6 pt-5">
        <div className="text-center">Hala code </div>
        <div className="text-center">React,Node.js </div>
        <div className="text-center">business partner module,ui/ux</div>
        <div className="text-center">Done</div>
        <div className="text-center">Low</div>
        <div className="text-center">14-02-2024 </div>
      </div>
    </div>
  );
}

export default Dashboard;
