import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from 'react'

function Eyes() {
  return (
    <div className="w-full h-[60vh]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="w-[17vw] h-[17vw] border-4  flex rounded-full bg-[#f1f1f1] items-center justify-center">
          <motion.div
            className="w-[8vw] h-[8vw] flex items-center justify-center rounded-full bg-black"
            // whileInView={{rotate:0}}
            animate={{ rotate: 360 }}
            style={{
                boxShadow: '1px 1px 20px 10px rgba(255, 255, 255, 1)',
              }}
            transition={{ ease:"linear",duration: 2, repeat: Infinity }}
          >
            <div className="line w-full h-8 flex ">
              <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
            </div>
          </motion.div>
        </div>
        <div className="w-[17vw] h-[17vw]  border-4 flex rounded-full bg-[#f1f1f1] items-center justify-center">
          <motion.div
            className="w-[8vw] h-[8vw] flex items-center justify-center rounded-full bg-black"
            animate={{ rotate: 360 }}
            style={{
                boxShadow: '1px 1px 20px 10px rgba(255, 255, 255, 1)',
              }}
            // whileInView={{rotate:0}}
            transition={{ ease:"linear",duration: 2, repeat: Infinity }}
          >
            <div className="line w-full h-8 flex ">
              <div className="bg-white w-[2vw] h-[2vw] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
