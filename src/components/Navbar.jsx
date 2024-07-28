import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed z-[999] blur-effect  flex sm:px-16  w-full  px-8 py-5 justify-between ">
      <NavLink to="/">
        <h1 className="font-bold text-2xl   NeueMontreal-Regular">
          Zoher R.
        </h1>
      </NavLink>
      <div className="gap-10 text-[#212121] hidden sm:flex items-center justify-between">
        {["About", "Work", "Skills", "Education"].map((item, key) => (
          <NavLink
            key={key}
            to={key === 3 ? `#${item.toLowerCase()}` : `/${item.toLowerCase()}`}
          >
            <a className="font-regular text-lg	 NeueMontreal-Regular">
              {item}
            </a>
          </NavLink>
        ))}
        <NavLink to="/contact">
          <a
            href=""
            className="font-regular text-lg 	ml-[9rem] NeueMontreal-Regular"
          >
            Contact us{" "}
          </a>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
