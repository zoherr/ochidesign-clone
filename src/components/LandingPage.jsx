import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed={-3}
      className="w-full bg-[#f1f1f1] h-screen pt-2 "
    >
      <div className="textstructure text-[#212121] mt-32">
        <div className="masker px-8 sm:px-16 FoundersGrotesk-Semibold">
          {["Hello, I'm Zoher.", "SMB Innovation", "full-stack developer"].map(
            (item, index) => {
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
            }
          )}
        </div>
      </div>
      <div className="border-t-2 capitalize border-zinc-300 mt-32 pt-7 sm:flex justify-between">
        {["enjoy building sites & apps", "My focus is MERN Stack"].map(
          (item, index) => {
            return (
              <p
                key={index}
                className="text-[#212121] px-8 sm:px-16 font-['Neue_Montreal'] sm:my-0 my-8 text-md font-normal"
              >
                {item}{" "}
              </p>
            );
          }
        )}
        <div className="start pl-8 pr-[13rem]  sm:pr-16">
          <div className="rounded-full w-full flex items-center gap-3 px-4 py-2 text-md border-[1.5px] border-zinc-800">
            Contact Us{" "}
            <GoArrowUpRight className="text-[#212121] font-semibold text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
