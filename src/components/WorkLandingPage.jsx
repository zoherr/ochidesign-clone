import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function WorkLandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed={-2}
      className="w-full overflow-hidden bg-[#CDEA68] h-[80vh] pt-2 z-50"
    >
      <div className="textstructure text-[#212121] mt-32 ">
        <div className="masker px-8 sm:px-16 FoundersGrotesk-Semibold overflow-hidden">
          {["Work"].map((item, index) => {
            return (
              <>
                <div className="flex items-center">
                  {index === 1 ? (
                    <motion.div
                      initial={{ width: 0, marginRight: 0 }}
                      animate={{ width: "10%", marginRight: "1rem" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 0.5,
                      }}
                      className="relative h-9 w-16 sm:h-24 overflow-hidden rounded-md sm:rounded-lg bg-[#fff]  "
                    >
                      <img
                        src="https://images.pexels.com/photos/15857477/pexels-photo-15857477/free-photo-of-red-walls-of-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr="
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : null}
                  <h1
                    className="uppercase sm:text-[8rem]   sm:leading-[7.5vw] text-5xl  sm:my-0"
                    key={index}
                  >
                    {item}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
        <div className="relative z-0 w-full h-[60vh]">
          <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="w-[20vw] h-[20vw] border-4  flex rounded-full bg-[#f1f1f1] items-center justify-center">
              <motion.div
                className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-black"
                // whileInView={{rotate:0}}
                animate={{ rotate: 360 }}
                style={{
                  boxShadow: "1px 1px 20px 10px rgba(255, 255, 255, 1)",
                }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              >
                <div className="line w-full h-8 flex ">
                  <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <div className="w-[20vw] h-[20vw]  border-4 flex rounded-full bg-[#f1f1f1] items-center justify-center">
              <motion.div
                className="w-[12vw] h-[12vw] flex items-center justify-center rounded-full bg-black"
                animate={{ rotate: 360 }}
                style={{
                  boxShadow: "1px 1px 20px 10px rgba(255, 255, 255, 1)",
                }}
                // whileInView={{rotate:0}}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              >
                <div className="line w-full h-8 flex ">
                  <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex z-30 justify-center overflow-hidden">
          <div className="w-[84%] h-[7rem] bottom-0 absolute z-30 rounded-t-xl bg-[#BFDA62]"></div>
        </div>
        <div className="flex z-30 justify-center  overflow-hidden">
          <div className="w-[94%] h-[4rem] bottom-0 absolute z-30 rounded-t-xl bg-[#B8D25E]"></div>
        </div>
      </div>
    </div>
  );
}

export default WorkLandingPage;
