import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import FormRedirect from "./components/FormRedirect";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Navbar />
      <div data-scroll-section>
        <LandingPage />
      </div>
      <div data-scroll-section>
        <Marquee />
      </div>
      <div data-scroll-section>
        <About />
      </div>
      <div data-scroll-section>
        <FeaturedProjects />
      </div>
      <div data-scroll-section>
        <Skills />
      </div>
      <div data-scroll-section>
        <FormRedirect />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
