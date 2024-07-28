import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

function WorkMarquee() {
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
          <div className="w-full pb-16 h-[100vh] flex justify-center items-center">
            {" "}
            <div className="h-[75vh] px-8 py-5 w-[75%] bg-[#f1f1f1] rounded-xl">
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-[#212121]  font-['Neue_Montreal']">
                  Zoher R.
                </h1>
                <div className="text-center">
                  <div className="  bg-slate-600 w-[18vw] overflow-hidden rounded-2xl h-[45vh]">
                    <img
                      src="https://i.ibb.co/Rp8nytV/1691760070554.jpg"
                      className=" w-full h-full object-cover"
                      alt=""
                    />{" "}
                  </div>
                  <h1 className="font-bold text-xl mt-3 text-[#212121]  font-['Neue_Montreal']">
                    Co-Founder & COO
                  </h1>
                </div>
              </div>
              <div className="flex justify-between FoundersGrotesk-Semibold">
                <div className=" mt-2 uppercase text-[8vw] FoundersGrotesk-Semibold  text-[#212121]">
                  Zoher Rangwala
                </div>
                {/* <div className="   w-[5vw] overflow-hidden mt-10  rounded-2xl h-[5vw]">
                  <img
                    src="/src/assets/smb.png"
                    className=" w-full h-full object-cover"
                    alt=""
                  />{" "}

                </div> */}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#CDEA68] h-[16rem]"></div>
    </div>
  );
}

export default WorkMarquee;
