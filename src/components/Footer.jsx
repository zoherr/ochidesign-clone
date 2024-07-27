import React from "react";

function Footer() {
  return (
    <>
      <div className="sm:flex pb-12 pt-28 px-8 font-['Neue_Montreal'] bg-[#f1f1f1] sm:px-16 text-[#212121]">
        <div className="sm:w-1/2">
          <p className="FoundersGrotesk-Semibold uppercase sm:text-[10rem] leading-[8.5vw]">
            FULL STACK DEV
          </p>
        </div>
        <div className="sm:w-1/2">
          <p className="FoundersGrotesk-Semibold uppercase leading-[8.5vw] sm:text-[10rem]">
            Zoher R
          </p>
          <p className="mt-28 text-lg">S:</p>
          <div className="mt-5">
            {["Instagram", "Facebook", "Linkedin", "Githib"].map(
              (item, index) => (
                <p key={index} className="underline text-lg">
                  {item}
                </p>
              )
            )}
          </div>
          {/*  */}
          <p className="mt-14 text-lg">L:</p>
          <div className="mt-5">
            {["Vadodara", "Gujarat", "India - 390002"].map((item, index) => (
              <p key={index} className="underline text-lg">
                {item}
              </p>
            ))}
          </div>
          {/*  */}
          <p className="mt-14 text-lg">E:</p>
          <div className="mt-5">
            {["workforzoher@gmail.com"].map((item, index) => (
              <p key={index} className="underline text-lg">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#f1f1f1] pb-10 sm:px-16 ">
        <h1 className="font-bold text-2xl   font-['Neue_Montreal']">
          Zoher R.
        </h1>
        <div className="gap-2 sm:pl-[16.8rem] text-[#212121] hidden sm:flex items-center ">
          {["© Zoher R", "2024."].map((item, key) => (
            <a
              href={`#${item.toLowerCase()}`}
              className="font-regular text-lg	 font-['Neue_Montreal']"
              key={key}
            >
              {item}
            </a>
          ))}
       
        </div>
        <a
            href=""
            className="font-regular text-lg 	ml-[9rem] font-['Neue_Montreal']"
          >
            Contact us{" "}
          </a>
      </div>
    </>
  );
}

export default Footer;
