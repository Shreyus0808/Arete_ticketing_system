import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import api from "../Api.js";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const fetchTickets = async () => {
    try {
      const uid = 1;
      const response = await api.get(`/tickets`);
      if (Array.isArray(response.data)) {
        setTickets(response.data.reverse());
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculatePriority = (p) => {
    switch (p) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      case 4:
        return "Very-High";
      case 5:
        return "Critical";
      default:
        return "Invalid Priority";
    }
  };
  const calculateStatusColor = (s) => {
    switch (s) {
      case "Ongoing":
        return "bg-green-200";
      case "On Hold":
        return "bg-yellow-200";
      case "Closed":
        return "bg-gray-200";
      case "Pending":
        return "bg-red-200";
      default:
        return "";
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      <div className="w-full  h-screen p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]">
        <div className="flex justify-between py-2 pb-5">
          <h2 className=" font-sans font-bold text-3xl text-[#AAAAAA]">
            Tickets
          </h2>

          <img src={user} className="w-10 h-10 z-10"></img>
        </div>
        <div className="p-4 space-y-3 ">
          <div className="bg-white rounded-xl pl-12  ">
            <div className="flex pt-6 pb-6">
              <div>
                <p className="text-xl font-sans font-semibold ">
                  Create a New Ticket
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex">
                <p>Assigned To:</p>
                <input
                  type="text"
                  className="border rounded-md px-2 py-1 ml-2 bg-gray-200"
                  placeholder="Jeff Joji"
                />
              </div>
              <div className="flex">
                <p>Project name:</p>
                <input
                  type="text"
                  className="border rounded-md px-2 py-1 ml-2 bg-gray-200"
                  placeholder="Jeff Joji"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="priority" className="mr-2">
                  Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="border rounded-md px-2 py-1 bg-gray-200 w-56"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="very_high">Very High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              <div className="flex">
                <p>ETA:</p>
                <input
                  type="text"
                  className="border rounded-md px-2 py-1 ml-2 bg-gray-200"
                  placeholder="02/02/24"
                />
              </div>
            </div>
            <div className="flex pt-3 ">
              <p>Description :</p>
              <input
                type="text"
                className="border rounded-md bg-gray-200 px-2 py-1 ml-2 w-[1070px] h-24"
                placeholder="Write your ticket description here.."
              />
            </div>
            <div className="text-end p-8">
              <button className="border shadow-md w-28 h-12 rounded-xl hover:bg-gray-300 text-lg font-semibold">
                Add Ticket
              </button>
            </div>
          </div>
        </div>

        <div className=" space-y-3  px-0 p-4">
          <div className="bg-white rounded-xl py-3">
            <div className="grid grid-cols-8 text-center">
              <h3 className="font-bold">ID</h3>
              <h3 className="font-bold ">Ticket Status</h3>
              <h3 className="font-bold  col-span-2">Description</h3>
              <h3 className="font-bold ">Assigned By</h3>
              <h3 className="font-bold ">Project</h3>
              <h3 className="font-bold ">Priority</h3>
              <h3 className="font-bold ">ETA</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl">
            <div className="grid grid-cols-8 text-center">
              <h3 className="font-base">ID</h3>
              <h3 className="font-base ">Ticket Status</h3>
              <h3 className="font-base col-span-2">
                Description kfvkjdshlkd kjsdjk skdjh sdkfj kdfjh kjdshf ksjdhfs
                jkdsfh kjfhds idfsh kjhdf
              </h3>
              <h3 className="font-base ">Assigned By</h3>
              <h3 className="font-base ">Project</h3>
              <h3 className="font-base ">Priority</h3>
              <h3 className="font-base ">ETA</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
