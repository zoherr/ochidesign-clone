import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function EducationInfoPage() {
  return (
    <div>
      <div className="border-t-2 z-10 capitalize border-zinc-300  pt-7 sm:flex justify-between"></div>
      <div className="sm:flex pb-12  px-8 NeueMontreal-Regular bg-[#f1f1f1] sm:px-16 text-[#212121]">
        <div className="sm:w-1/2">
          <p className=" uppercase sm:text-lg">
            Bachelor's of Computer application
          </p>
        </div>
        <div className="sm:w-1/2 ">
          {/*  */}
          <div className=" sm:flex">
            <p className=" sm:w-1/2  sm:text-lg">
              Motivated and ambitious student pursuing BCA at ITMBU with a keen
              interest in the intersection of programming and design.
            </p>
            <div className="relative left-19 ml-48   start   ">
              <div className="rounded-full w-full flex items-center gap-3 px-4 py-2 text-md border-[1.5px] border-zinc-800">
                ITMBU{" "}
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default EducationInfoPage;
