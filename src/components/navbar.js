import React from "react";
import bell from "../images/icons8-bell-48.png";

function Navbar() {
  return (
    <div>
      <button className="pr-4 h-16 w-full text-left flex justify-end">
        <img className="w-8 h-8 " src={bell}></img>
      </button>
    </div>
  );
}

export default Navbar;
