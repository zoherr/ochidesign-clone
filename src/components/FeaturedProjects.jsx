import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function FeaturedProjects() {
  return (
    <div
      className="pt-32 pb-8 w-full font-['Neue_Montreal'] bg-[#F1F1F1] "
      id="work"
    >
      <h1 className="sm:text-[3vw]  px-8 sm:px-16   leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] hover:under font-['Neue_Montreal'] ">
        Featured projects
      </h1>
      <div className="border-t-2 mt-9 capitalize border-zinc-300 flex flex-wrap">
        <div className="px-8 mt-9 w-full sm:w-1/2 sm:px-14">
          <div className="flex gap-2 items-center">
            <div className="bg-black h-3 w-3 rounded-full"></div>
            <div>Coder's Corner</div>
          </div>
          <motion.div
            className="bg-slate-700 mt-11 h-[19rem] sm:h-[30rem] rounded-xl"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
          ></motion.div>
          <div className="mt-5 flex  flex-wrap gap-2">
            {["NEXT JS", "MONGODB", "EXPRESSJS", "REDIS"].map((item, index) => (
              <p
                className="px-4 sm:text-[1rem]  border-2 border-zinc-900 py-1 rounded-full"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="px-8 mt-9 w-full sm:w-1/2 sm:px-14">
          <div className="flex gap-2 items-center">
            <div className="bg-black h-3 w-3 rounded-full"></div>
            <div>Study Cloud</div>
          </div>
          <motion.div
            className="bg-slate-700 mt-11 h-[19rem] sm:h-[30rem] rounded-xl"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
          ></motion.div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["REACT JS", "APPWRITE"].map((item, index) => (
              <p
                className="px-4 sm:text-[1rem] text-[#212121] border-2 border-[#212121] py-1 rounded-full"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-20 w-full flex justify-center text-center">
        <button className="text-zinc-100 items-center gap-4 flex text-center rounded-full text-[1.2rem] py-4 px-8 bg-[#212121] ">
          VIEW ALL PROJECTS
          <div className="bg-white h-3 w-3 rounded-full"></div>
        </button>
      </div>
      
    </div>
  );
}

export default FeaturedProjects;
