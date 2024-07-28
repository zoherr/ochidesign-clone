import React, { useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Skills() {

  return (
    <div data-scroll className="" id="skills">
      <div
        className="pt-20  bg-[#F1F1F1] border-b-2 border-zinc-300"
      
      ></div>
      <div className="pt-20  pb-32 w-full  sm:flex px-8 sm:px-16  NeueMontreal-Regular bg-[#F1F1F1]">
        <h1 className="sm:text-[3vw] mb-8 sm:w-1/2   leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] NeueMontreal-Regular ">
          Skills
        </h1>
        <div className="flex flex-wrap sm:pl-8 gap-5 mt-2 mb-10">
          {[
            "ReactJS",
            "MongoDB",
            "Figma",
            "Git",
            "WebSocket",
            "NextJS",
            "ExpressJS",
            "Redis",
            "DevOPS",
            "NodeJS",
            "GSAP",
            "Docker",
            "Appwrite",
          ].map((item, index) => (
            <motion.div
              className="bg-[#E1E1E1]  text-[1.2rem] font-semibold pt-11 pb-5 pl-5 pr-8 rounded-lg w-36 text-[#212121]"
              key={index}
              whileHover={{
                scale: 1.1,
                color: "#e1e1e1",
                backgroundColor: "#004D43",
              }}
              whileTap={{
                scale: 0.95,
                color: "#e1e1e1",
                backgroundColor: "#004D43",
              }}
              transition={{ ease: "easeInOut", duration: 0.1, delay: 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#CDEA68] h-56"></div>
    </div>
  );
}

export default Skills;
