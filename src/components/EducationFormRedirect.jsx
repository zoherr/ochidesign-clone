import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useTransform, useViewportScroll } from "framer-motion";

function EducationFormRedirect() {
  return (
    <div
    data-scroll
    data-scroll-speed="-.6"

    
    className="bg-[#CDEA68] text-[#212121] py-32 w-full justify-center "
  >
    <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
      <div className="w-[12vw] h-[12vw] flex rounded-full bg-white items-center justify-center">
        <motion.div
          className="w-[8vw] h-[8vw] flex items-center justify-center rounded-full bg-black"
          // whileInView={{rotate:0}}
          animate={{ rotate: 360 }}
          transition={{ ease:"linear",duration: 2, repeat: Infinity }}
        >
          <div className="line w-full h-8 flex ">
            <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
          </div>
        </motion.div>
      </div>
      <div className="w-[12vw] h-[12vw] flex rounded-full bg-white items-center justify-center">
        <motion.div
          className="w-[8vw] h-[8vw] flex items-center justify-center rounded-full bg-black"
          animate={{ rotate: 360 }}
          // whileInView={{rotate:0}}
          transition={{ ease:"linear",duration: 2, repeat: Infinity }}
        >
          <div className="line w-full h-8 flex ">
            <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="textstructure text-[#212121] ">
      <div className="masker  FoundersGrotesk-Semibold">
        {["READY", "TO START", "THE PROJECT?"].map((item, index) => {
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
        })}
      </div>
    </div>
    <div className=" mt-20 w-full flex justify-center text-center">
      <button className="text-zinc-100 items-center gap-4 flex text-center rounded-full text-[1.2rem] py-4 px-8 bg-[#212121] ">
        START THE PROJECT
        <GoArrowUpRight className=" font-semibold text-3xl" />
      </button>
    </div>
  </div>
  )
}

export default EducationFormRedirect
