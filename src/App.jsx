import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import FormRedirect from "./components/FormRedirect";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen pb-7 bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <FeaturedProjects />
      <Skills />
      <FormRedirect />
      <Footer />
    </div>
  );
}

export default App;
