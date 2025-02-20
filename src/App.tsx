import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Services } from "./pages/Services.tsx";
import { Contact } from "./pages/Contact.tsx";
import { motion, useSpring, useScroll } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
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
    </>
  );
}

export default App;
