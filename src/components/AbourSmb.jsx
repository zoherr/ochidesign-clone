import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function AbourSmb() {
  return (
    <div  className="pt-32 pb-8 w-full NeueMontreal-Regular bg-[#F1F1F1] ">
        <h1 className="sm:text-[3vw]  px-8 sm:px-16  pb-10 leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] hover:under NeueMontreal-Regular ">
       Co-Founder Of SMB Innovation
      </h1>
      <div className="border-t-2 capitalize border-zinc-300  pt-7 sm:flex justify-between"></div>
      <div className="sm:flex pb-12  px-8 NeueMontreal-Regular bg-[#f1f1f1] sm:px-16 text-[#212121]">
        <div className="sm:w-1/2">
          <p className=" uppercase sm:text-lg">About SMB Innovation:</p>
        </div>
        <div className="sm:w-1/2 ">
          {/*  */}
          <div className=" sm:flex">
            <p className=" sm:w-1/2  sm:text-lg">
            At SMB INNOVATION, we specializing from Designing Eye-Catching E-Commerce Websites to Executing Targeted Digital Marketing Strategies, Managing Social Media Platforms, and creating captivating Graphic Designs.
            <br /><br />
            Our Agency Specializes in Crafting Unparalleled Online shopping experiences, tailored to elevate your Brand's Digital Presence & Drive Sales.
            <br /><br />
            With a meticulous attention to detail and a passion for Innovation, We'll build a Website that not only showcases your products but also captivates your audience, turning Visitors into Loyal Customers. Trust us to bring your E-commerce Vision to life and exceed your Expectations every step of the way.
            </p>
            <div className="relative left-19 ml-48   start   ">
              <div className="rounded-full w-full flex items-center gap-3 px-4 py-2 text-md border-[1.5px] border-zinc-800">
                Visit Website{" "}
                <GoArrowUpRight className="text-[#212121] font-semibold text-lg" />
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default AbourSmb
