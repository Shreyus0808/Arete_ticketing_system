import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import api from "../Api.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    try {
      const uid = 1;
      const response = await api.get(`/projects/all`);
      if (Array.isArray(response.data)) {
        setProjects(response.data.reverse());
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

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="w-full  h-full p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]">
        <div className="flex justify-between py-2 pb-5">
          <h2 className=" font-sans font-bold text-3xl text-[#AAAAAA]">
            Projects
          </h2>

          <img src={user} className="w-10 h-10 z-10"></img>
        </div>

        <div className=" space-y-3 text-left  px-0 p-4">
          <div className="bg-white text-left rounded-xl py-3">
            <div className="grid grid-cols-8 text-center">
              <h3 className="font-bold">ID</h3>
              <h3 className="font-bold ">Project Name</h3>
              <h3 className="font-bold ">Status</h3>
              <h3 className="font-bold text-left  col-span-2">Description</h3>
              <h3 className="font-bold ">Project Manager</h3>
              <h3 className="font-bold ">Start Date</h3>
              <h3 className="font-bold ">End Date</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl divide-y-[3px] px-3 py-4">
            {projects.map((p) => (
              <div className="grid grid-cols-8 text-center py-2">
                <h3 className="font-base">{p.project_id}</h3>
                <h3 className="font-base ">{p.project}</h3>
                <h3 className={`font-base inline-flex justify-center h-fit`}>
                  <p
                    className={`font-base w-20 p-1 rounded-md ${calculateStatusColor(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </p>
                </h3>
                <h3 className="font-base text-left col-span-2">
                  {p.description}
                </h3>
                <h3 className="font-base ">{p.project_manager}</h3>
                <h3 className="font-base ">{p.start_date}</h3>
                <h3 className="font-base ">{p.end_date}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
