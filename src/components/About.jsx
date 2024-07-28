import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div
      data-scroll
      // data-scroll-speed=".8"
      className=" bg-[#004d43]"
      id="about"
    >
      <div className=" w-full    sm:pl-16 px-8   py-20 bg-[#CDEA68] rounded-tl-3xl text-[#212121] rounded-tr-3xl">
        <div className="sm:text-[3vw]    leading-[6.5vw] sm:leading-[4vw] font-normal text-[6vw] font-['Neue_Montreal']  ">
          Proficient in Figma, UI design, web development, and web design.
          Passionate about creating visually appealing and user-friendly digital
          experiences. Quick learner, adaptable, and committed to staying
          up-to-date with the latest industry trends. Additionally, I'm a
          full-stack MERN developer with expertise in backend development.
          Seeking opportunities to apply and enhance my skills while
          contributing to innovative projects and teams.
        </div>
        <div className="border-t-2  gap-5 border-zinc-900 mt-32 pt-20 sm:flex justify-between">
          <div className="sm:w-1/2  ">
            <h1 className="sm:text-[3vw] text-[#212121] text-[6vw] font-['Neue_Montreal'] ">
              Read My Blogs
            </h1>
            <button className="px-9 gap-5 flex items-center py-5 bg-zinc-900 hover:bg-black uppercase mt-4 text-white rounded-full">
              Read now
              <GoArrowUpRight className="text-[#fff] font-semibold text-2xl" />
            </button>
          </div>
          <div className="sm:w-1/2 h-[50vh] mt-5 sm:mt-0 sm:h-[70vh] bg-red-600 rounded-3xl overflow-hidden">
            <img
              src={`https://images.pexels.com/photos/3366282/pexels-photo-3366282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
