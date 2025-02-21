import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Services } from "./pages/Services.tsx";
import { Contact } from "./pages/Contact.tsx";
import { motion, useSpring, useScroll } from "motion/react";
import bgVideo from "./assets/bgVideo.mp4";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
      <video
        className="position-absolute w-100 h-100 object-fit-cover z-n1  opacity-75"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          zIndex: 100,
          backgroundColor: "#c1ff72",
        }}
      />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
