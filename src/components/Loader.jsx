import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 29); // 3000ms / 100 steps = 30ms per step

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5, delay: 3 }}
      className="sm:bg-[#212121] bg-[#CDEA68] text-[#f1f1f1] w-full h-full flex items-center justify-center z-50"
    >
      <div className=" text-[#CDEA68] flex items-center h-screen w-full justify-center ">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5, delay: 3 }}
          className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <div className="w-[12vw] h-[12vw] flex rounded-full bg-white items-center justify-center">
            <motion.div
              className="w-[8vw] h-[8vw] flex items-center justify-center rounded-full bg-black"
              // whileInView={{rotate:0}}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
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
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            >
              <div className="line w-full h-8 flex ">
                <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="textstructure hidden sm:flex text-[#CDEA68] ">
          <div className="masker  FoundersGrotesk-Semibold">
            {["ZOHER IS ", "WATCHING YOU!!"].map((item, index) => {
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
      </div>
      <div className="absolute sm:text-[#f1f1f1] text-[#212121] FoundersGrotesk-Semibold tracking-widest bottom-10 left-1/2 transform -translate-x-1/2 text-4xl">
        {count}%
      </div>
    </motion.div>
  );
}

export default Loader;
