import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import MobileState from "./context/MobileState";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components without artificial delays
const Hero = lazy(() => import("./components/Hero"));
const ProjectSlider = lazy(() => import("./components/ProjectSlider"));
const ContentCreator = lazy(() => import("./components/ContentCreator"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Custom component for section-specific loading
const SectionLoader = ({ children, label }) => (
  <Suspense fallback={<LoadingSpinner label={label} />}>{children}</Suspense>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload critical resources
  useEffect(() => {
    // Add listener for when the page has loaded
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <MobileState>
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <div className="bg-none">
            <Navbar />
            <Suspense
              fallback={<LoadingSpinner label="Loading hero section..." />}
            >
              <Hero />
            </Suspense>
          </div>

          {/* Project Slider Section */}
          <SectionLoader label="Loading project showcase...">
            <ProjectSlider />
          </SectionLoader>

          {/* Each section gets its own Suspense boundary for better UX */}
          <SectionLoader label="Loading about section...">
            <About />
          </SectionLoader>

          <SectionLoader label="Loading experience section...">
            <Experience />
          </SectionLoader>

          <SectionLoader label="Loading technologies section...">
            <Tech />
          </SectionLoader>

          {/* Projects Section */}
          <SectionLoader label="Loading projects section...">
            <Works />
          </SectionLoader>

          {/* Content Creator Section */}
          <SectionLoader label="Loading content section...">
            <ContentCreator />
          </SectionLoader>

          <SectionLoader label="Loading testimonials section...">
            <Feedbacks />
          </SectionLoader>

          <div className="relative z-0">
            <SectionLoader label="Loading contact section...">
              <Contact />
            </SectionLoader>

            <SectionLoader label="Loading stars...">
              <StarsCanvas />
            </SectionLoader>
          </div>
        </div>
      </BrowserRouter>
    </MobileState>
  );
};

export default App;
