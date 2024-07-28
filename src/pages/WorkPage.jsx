import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import FormRedirect from "../components/FormRedirect";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import AboutLandingPage from "../components/AboutLandingPage";
import AboutInfoPage from "../components/AboutInfoPage";
import Eyes from "../components/Eyes";
import AbourSmb from "../components/AbourSmb";
import AboutMarquee from "../components/AboutMarquee";
import WorkLandingPage from "../components/WorkLandingPage";
import WorkInfoPage from "../components/WorkInfoPage";
import WorkMarquee from "../components/WorkMarquee";

function WorkPage() {
  const [loader, setLoader] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    if (!loader && scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        getDirection: true,
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [loader]);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div data-scroll-container  ref={scrollRef}>
          <Navbar />
          <div className="bg-[#CDEA68]" data-scroll-section>
            <WorkLandingPage />
          </div>
          <div data-scroll-section>
            <WorkInfoPage />
          </div>
          <div data-scroll-section>
            <WorkMarquee />
          </div>
          
          <div data-scroll-section>
            <FormRedirect />
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default WorkPage;
