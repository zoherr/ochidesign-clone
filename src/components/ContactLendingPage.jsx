
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useTransform, useViewportScroll } from "framer-motion";
function ContactLendingPage() {
  return (
    <div className="w-full bg-[#f1f1f1] h-[65vh] pt-2 ">
      <div className="textstructure text-[#212121] mt-32">
        <div className="masker px-8 sm:px-16 FoundersGrotesk-Semibold">
          {["Let’s start", "a project together"].map((item, index) => {
            return (
              <>
                <div className="flex items-center">
                  {index === 0 ? (
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
                        src="https://ochi.design/wp-content/uploads/2022/05/Asset-41-20-300x203.jpg"
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
      </div>
    </div>
  );
}

export default ContactLendingPage;
