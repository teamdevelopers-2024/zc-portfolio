import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  // Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect, useState } from "react";
import { config } from "./constants/config";

const detectOS = (): string => {
  const userAgent = navigator.userAgent || navigator.vendor;
  let Os = '';
  if (/windows/i.test(userAgent)) Os = "Windows";
  if (/macintosh|mac os x/i.test(userAgent)) Os = "MacOS";
  if (/linux/i.test(userAgent)) Os = "Linux";
  if (/android/i.test(userAgent)) Os = "Android";
  if (/iPad|iPhone|iPod/.test(userAgent)) Os = "iOS";
  console.log("OS Detected == ",Os)
  return Os;

};


const App = () => {
  const [os, setOS] = useState<string>("Unknown OS");

  useEffect(() => {
    // Detect and set the operating system
    setOS(detectOS());

    // Update the document title
    if (document.title !== config.html.title) {
      document.title = "Zeecode";
    }
  }, []);

  return (
    <>
    <BrowserRouter>
      <div className="bg-[#0000] relative z-0">
        {/* Hero Section with Video Background */}
        <div className="relative w-full h-[300px] md:h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Main Sections */}
        <About />
        <Experience />
        {/* Render Works component only if OS is not iOS */}
        {os !== "iOS" && <Works />}
        <Feedbacks />

        {/* Contact Section with StarsCanvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;
