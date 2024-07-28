import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function WorkInfoPage() {
  return (
    <div>
      <div className="bg-[#f1f1f1]"></div>
      <div className="border-t-2 z-10  capitalize border-zinc-300      sm:flex justify-between"></div>
      <div className=" pb-24 pt-[9rem] px-8 font-['Neue_Montreal'] bg-[#f1f1f1] sm:px-12 text-[#212121]">
        <h1 className="sm:text-[4vw]  px-8 sm:px-0 leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] hover:under font-['Neue_Montreal'] ">
          Purpose driven,{" "}
          <span className="border-b-2 border-[#212121]">
            strategy-led projects
          </span>{" "}
          <br />
          that people care about.
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
              {["NEXT JS", "MONGODB", "EXPRESSJS", "REDIS"].map(
                (item, index) => (
                  <p
                    className="px-4 sm:text-[1rem]  border-2 border-zinc-900 py-1 rounded-full"
                    key={index}
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
          {/*  */}
          <div className="px-8 mt-9 mb-[5rem] w-full sm:w-1/2 sm:px-14">
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
          {/*  */}
          <div className="px-8 mt-9 w-full sm:w-1/2 sm:px-14">
            <div className="flex gap-2 items-center">
              <div className="bg-black h-3 w-3 rounded-full"></div>
              <div>Chess.com Clone</div>
            </div>
            <motion.div
              className="bg-slate-700 mt-11 h-[19rem] sm:h-[30rem] rounded-xl"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["REACT JS", "WebSocket"].map((item, index) => (
                <p
                  className="px-4 sm:text-[1rem] text-[#212121] border-2 border-[#212121] py-1 rounded-full"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="px-8 mt-9  w-full sm:w-1/2 sm:px-14">
            <div className="flex gap-2 items-center">
              <div className="bg-black h-3 w-3 rounded-full"></div>
              <div>TradingView App Re-design</div>
            </div>
            <motion.div
              className="bg-slate-700 mt-11 h-[19rem] sm:h-[30rem] rounded-xl"
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Figma", "UI/UX"].map((item, index) => (
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
      </div>
    </div>
  );
}

export default WorkInfoPage;
