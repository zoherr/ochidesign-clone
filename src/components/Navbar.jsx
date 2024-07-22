import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] blur-effect  flex sm:px-16  w-full  px-8 py-5 justify-between ">
      <h1 className="font-bold text-2xl   font-['Neue_Montreal']">Zoher R.</h1>
      <div className="gap-10 text-[#212121] hidden sm:flex items-center justify-between">
        {["About", "Work", "skills", "Experience"].map((item, key) => (
          <a
            href=""
            className="font-regular text-lg	 font-['Neue_Montreal']"
            key={key}
          >
            {item}
          </a>
        ))}
        <a href="" className="font-regular text-lg 	ml-[9rem] font-['Neue_Montreal']">
          Contact us{" "}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
