import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function EducationMarquee() {
  return (
    <div className="w-full ">
      <div>
        <div className="w-full  pb-10 rounded-tl-3xl rounded-tr-3xl pt-[4rem] sm:pt-[5rem]  FoundersGrotesk-Semibold bg-[#004d43] text-white">
          <div className="border-t-[1px] uppercase whitespace-nowrap text-[20vw] overflow-hidden border-zinc-100 border-b-[1px] flex">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className="sm:mx-10 mx-5 leading-none m-0"
            >
              Bachelor's of Computer application{" "}
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className="sm:mx-10 mx-5 leading-none m-0"
            >
              Bachelor's of Computer application{" "}
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
              className="sm:mx-10 mx-5 leading-none m-0"
            >
              Bachelor's of Computer application{" "}
            </motion.h1>
          </div>
          <div className="w-full text-[#212121]  pb-16 h-[100vh]  flex justify-center items-center">
            {" "}
            <div className="h-[75vh] hover:text-[#004d43] py-5 w-[75%] bg-[#f1f1f1] rounded-xl overflow-hidden relative">
              <div className="">
                <h1 className="font-bold px-7 hover:text-[#004d43] text-2xl  NeueMontreal-Regular">
                
                </h1>
                <div className="text-center hover:text-[#004d43] flex flex-col items-center mb-28 ">
                  <div className="absolute  hover:text-[#004d43] tracking-widest FoundersGrotesk-Semibold text-[20vw] ">
                    ITMBU
                  </div>
                  <div
                    className="relative w-full rounded-2xl"
                    style={{ transform: "translateY(-50px)" }}
                  >
                    <img
                      src="https://itmbu.ac.in/wp-content/uploads/2024/02/Asset-24.png"
                      className="w-full h-full rounded-3xl pb-5 object-cover"
                      alt=""
                    />{" "}
                  </div>
                  {/* <h1 className="font-bold text-xl mt-3 text-[#212121] NeueMontreal-Regular">
      BCA
      </h1> */}
                </div>
              </div>
              {/* <div className="flex justify-between FoundersGrotesk-Semibold">
  <div className="mt-2 uppercase text-[8vw] FoundersGrotesk-Semibold text-[#212121]">ITMBU</div>
</div> */}
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#CDEA68] h-40"></div>
    </div>
  );
}

export default EducationMarquee;
