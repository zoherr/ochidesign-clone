import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#F1F1F1]">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
      </div>
    </>
  );
}

export default App;
