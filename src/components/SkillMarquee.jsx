import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

function SkillMarquee() {
  return (
    <div className="w-full ">
      <div>
        <div className="w-full  pb-10 rounded-tl-3xl rounded-tr-3xl pt-[4rem] sm:pt-[5rem]  FoundersGrotesk-Semibold bg-[#004d43] text-white">
          <div className="border-t-[1px] uppercase whitespace-nowrap text-[20vw] overflow-hidden border-zinc-100 border-b-[1px] flex">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
              className="sm:mx-10 mx-5 leading-none m-0"
            >
              REACTJS - NEXTJS - MONGODB - NODEJS - EXPRESSJS - WebSocket -
              AppWrite - Figma - Ui/Ux -{" "}
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 50 }}
              className="sm:mx-10 mx-5 leading-none m-0"
            >
              REACTJS - NEXTJS - MONGODB - NODEJS - EXPRESSJS - WebSocket -
              AppWrite - Figma - Ui/Ux -{" "}
            </motion.h1>
          </div>
          <div className="w-full NeueMontreal-Regular text-[#f1f1f1] px-8 flex sm:px-12 pb-16 h-[80vh] justify-between   mt-12">
            <div className="w-1/3 text-[#f1f1f1] NeueMontreal-Regular  sm:text-2xl">
              Letest Blogs:
            </div>
            <div className="w-full flex gap-9">
              <div className="w-1/2">
                {" "}
                <motion.div
                  className="bg-slate-100 h-[19rem] sm:h-[20rem] rounded-xl"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                   <div className="mt-5  flex flex-wrap gap-2">
              {["REACT JS", "WebSocket"].map((item, index) => (
                <p
                  className="px-4 sm:text-[1rem]  border-2 border-[#f1f1f1] py-1 rounded-full"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
              </div>
              <div className="w-1/2">
                {" "}
                <motion.div
                  className="bg-slate-100 h-[19rem] sm:h-[20rem] rounded-xl"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                   <div className="mt-5 flex flex-wrap gap-2">
              {["REACT JS", "WebSocket"].map((item, index) => (
                <p
                  className="px-4 sm:text-[1rem]  border-2 border-[#f1f1f1] py-1 rounded-full"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
              </div>
              <div className="w-1/2">
                {" "}
                <motion.div
                  className="bg-slate-100 h-[19rem] sm:h-[20rem] rounded-xl"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["REACT JS", "WebSocket"].map((item, index) => (
                    <p
                      className="px-4 sm:text-[1rem]  border-2 border-[#f1f1f1] py-1 rounded-full"
                      key={index}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default SkillMarquee;
