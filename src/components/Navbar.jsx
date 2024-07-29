import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="fixed z-[999] blur-effect  flex sm:px-16  w-full  px-8 py-5 justify-between ">
      <NavLink to="/">
        <h1 className="font-bold text-2xl   NeueMontreal-Regular">Zoher R.</h1>
      </NavLink>
      <div className="gap-10 text-[#212121] hidden sm:flex items-center justify-between">
        {["About", "Work", "Skills", "Education"].map((item, key) => (
          <NavLink
            key={key}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `font-regular text-lg NeueMontreal-Regular ${
                isActive || location.pathname === `/${item.toLowerCase()}`
                  ? "border-b-2 border-[#212121]"
                  : ""
              }`
            }
          >
            {item}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-regular text-lg 	ml-[9rem] NeueMontreal-Regular ${
              isActive || location.pathname === `/contact`
                ? "border-b-2 border-[#212121]"
                : ""
            }`
          }
        >
          Contact us{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
