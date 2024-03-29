import React from "react";
import about from "../images/about image.png";
import user from "../images/user.png";
import { Chart } from "react-google-charts";

function Dashboard() {
  return (
    <div className="w-full h-screen p-4 px-6 bg-[#E9E9E9] flex flex-col divide-y-[3px]  divide-[#AAAAAA]">
      <div className="flex justify-between pb-1.5">
        <h2 className=" font-sans font-bold text-3xl text-[#AAAAAA]">
          Report and Analysis
        </h2>
        <img src={user} className="w-10 h-10 z-10"></img>
      </div>
      <div className="flex flex-col justify-between px-0 p-4">
        <div className="bg-white p-2 rounded-xl flex items-center justify-between h-screen"></div>
        <div style={{ display: "flex", maxWidth: 900 }}>
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7],
            ]}
            options={{
              title: "My Daily Activities",
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
