import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function FormRedirect() {
  return (
    <div className="bg-[#CDEA68] text-[#212121] py-32 w-full justify-center ">
      <div className="textstructure text-[#212121] ">
        <div className="masker  FoundersGrotesk-Semibold">
          {["READY", "TO START", "THE PROJECT?"].map(
            (item, index) => {
              return (
                <>
                  <div className="flex justify-center items-center">
                    <h1
                      className="uppercase sm:text-[14.1rem]   sm:leading-[11.5vw]  text-6xl sm:my-0"
                      key={index}
                    >
                      {item}
                    </h1>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
      <div className=" mt-20 w-full flex justify-center text-center">
        <button className="text-zinc-100 items-center gap-4 flex text-center rounded-full text-[1.2rem] py-4 px-8 bg-[#212121] ">
         START THE PROJECT 
         <GoArrowUpRight className=" font-semibold text-3xl" />

        </button>
      </div>
    </div>
  );
}

export default FormRedirect;
