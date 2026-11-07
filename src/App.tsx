import { MotionConfig } from "motion/react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { fullName, profile } from "./data/content";

function App() {
  return (
    // reducedMotion="user": respects visitor's operating system animation preference
    <MotionConfig reducedMotion="user">
      <title>{`${fullName} | ${profile.headline}`}</title>
      <meta
        name="description"
        content={`${fullName} - ${profile.headline}. ${profile.supportingDescription}`}
      />

      <div className="min-h-screen overflow-x-clip bg-[#080c0a] text-zinc-100 selection:bg-emerald-400 selection:text-black">
        {/* Accessible skip link */}
        <a
          href="#main"
          className="sr-only rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to main content
        </a>

        {/* 1. Navigation bar */}
        <Navbar />

        <main id="main">
          {/* 2. Hero section */}
          <Hero />

          {/* 3. About me */}
          <About />

          {/* 4. Technical skills */}
          <Skills />

          {/* 5. Featured projects & Other projects */}
          <Projects />

          {/* 6. Education */}
          <Education />

          {/* 7. Certifications */}
          <Certifications />

          {/* 8. Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
