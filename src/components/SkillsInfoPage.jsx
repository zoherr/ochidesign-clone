import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function SkillsInfoPage() {
  return (

    <div  data-scroll
    data-scroll-speed={-2}>
      <h1 className="sm:text-[4vw]  sm:px-16 px-8 py-16 leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] hover:under NeueMontreal-Regular ">
        Purpose driven,{" "}
        <span className="border-b-2 border-[#212121]">strategy-led Skills</span>{" "}
        <br />
        that people care about.
      </h1>
      <div>
        <div className="border-t-2 z-10 capitalize border-zinc-300  pt-7 sm:flex justify-between"></div>
        <div className="sm:flex pb-12  px-8 NeueMontreal-Regular bg-[#f1f1f1] sm:px-16 text-[#212121]">
          <div className="sm:w-1/2">
            <p className=" uppercase sm:text-lg">Ui/Ux</p>
          </div>
          <div className="sm:w-1/2 ">
            {/*  */}
            <div className=" sm:flex">
              <p className=" sm:w-1/2  sm:text-lg">
                Proficient in Figma, UI design.
                Passionate about creating visually appealing and user-friendly
                digital experiences. 
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
        <div className="sm:flex pb-12  px-8 NeueMontreal-Regular bg-[#f1f1f1] sm:px-16 text-[#212121]">
          <div className="sm:w-1/2">
            <p className=" uppercase sm:text-lg">Web Dev</p>
          </div>
          <div className="sm:w-1/2 ">
            {/*  */}
            <div className=" sm:flex">
              <p className=" sm:w-1/2  sm:text-lg">
                I'm a full-stack MERN developer with expertise in
                backend development. Seeking opportunities to apply and enhance
                my skills while contributing to innovative projects and teams.
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
        <div className="sm:flex pb-12  px-8 NeueMontreal-Regular bg-[#f1f1f1] sm:px-16 text-[#212121]">
          <div className="sm:w-1/2">
            <p className=" uppercase sm:text-lg">Graphic Design</p>
          </div>
          <div className="sm:w-1/2 ">
            {/*  */}
            <div className=" sm:flex">
              <p className=" sm:w-1/2  sm:text-lg">
              Skilled in developing innovative branding, print, and digital graphics, with a strong understanding of typography, color theory, and layout principles.
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
    </div>
  );
}

export default SkillsInfoPage;
