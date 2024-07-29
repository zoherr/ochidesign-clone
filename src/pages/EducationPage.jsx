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
import EducationLandingPage from "../components/EducationLandingPage";
import EducationInfoPage from "../components/EducationInfoPage";
import EducationFormRedirect from "../components/EducationFormRedirect";
import EducationMarquee from "../components/EducationMarquee";

function EducationPage() {
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
        <div data-scroll-container ref={scrollRef}>
          <Navbar />
          <div data-scroll-section>
            <EducationLandingPage />
          </div>
          <div data-scroll-section>
            <EducationInfoPage />
          </div>
          <div data-scroll-section>
            <Eyes />
          </div>
      
          <div data-scroll-section>
            <EducationMarquee />
          </div>
          <div data-scroll-section>
            <EducationFormRedirect />
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default EducationPage;
