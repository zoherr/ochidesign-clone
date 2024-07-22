import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

function Marquee() {

  return (
    <>
    <div className="bg-[#f1f1f1]">
    <div className="w-full pb-10 rounded-tl-3xl rounded-tr-3xl pt-[4rem] sm:pt-[5rem]  FoundersGrotesk-Semibold bg-[#004d43] text-white">
      <div className="border-t-[1px] uppercase whitespace-nowrap text-[20vw] overflow-hidden border-zinc-100 border-b-[1px] flex">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="sm:mx-10 mx-5 leading-none m-0">I'm Zoher </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="sm:mx-10 mx-5 leading-none m-0">I'm Zoher </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="sm:mx-10 mx-5 leading-none m-0">I'm Zoher </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="sm:mx-10 mx-5 leading-none m-0">I'm Zoher </motion.h1>
        
      </div>
    </div>
    </div>
    </>
  );
}

export default Marquee;
