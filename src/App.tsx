import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = 'Zeecode';
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#0000] relative z-0">
        <div className="relative w-full h-[300px] md:h-screen">
          <video className="absolute top-0 left-0 w-full h-full object-cover"autoPlay loop muted>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
