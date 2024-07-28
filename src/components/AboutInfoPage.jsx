import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function AboutInfoPage() {
  return (
    <div>
      <div className="border-t-2 z-10 capitalize border-zinc-300  pt-7 sm:flex justify-between"></div>
      <div className="sm:flex pb-12  px-8 font-['Neue_Montreal'] bg-[#f1f1f1] sm:px-16 text-[#212121]">
        <div className="sm:w-1/2">
          <p className=" uppercase sm:text-lg">About Us:</p>
        </div>
        <div className="sm:w-1/2 ">
          {/*  */}
          <div className=" sm:flex">
            <p className=" sm:w-1/2  sm:text-lg">
              Proficient in Figma, UI design, web development, and web design.
              Passionate about creating visually appealing and user-friendly
              digital experiences. Quick learner, adaptable, and committed to
              staying up-to-date with the latest industry trends. Additionally,
              I'm a full-stack MERN developer with expertise in backend
              development. Seeking opportunities to apply and enhance my skills
              while contributing to innovative projects and teams.
            </p>
            <div className="relative left-19 ml-48   start   ">
              <div className="rounded-full w-full flex items-center gap-3 px-4 py-2 text-md border-[1.5px] border-zinc-800">
                Contact Us{" "}
                <GoArrowUpRight className="text-[#212121] font-semibold text-lg" />
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default AboutInfoPage;
