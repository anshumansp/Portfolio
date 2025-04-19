import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import MobileState from "./context/MobileState";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load Hero with priority
const Hero = lazy(() => import("./components/Hero"));

// Lazy load custom components
const ProjectSlider = lazy(() => import("./components/ProjectSlider"));
const ContentCreator = lazy(() => import("./components/ContentCreator"));

// Lazy load other components with lower priority
const About = lazy(() =>
  import("./components/About").then((module) => {
    // Artificial delay for staggered loading to improve perceived performance
    return new Promise((resolve) => setTimeout(() => resolve(module), 100));
  })
);
const Contact = lazy(() =>
  import("./components/Contact").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 200));
  })
);
const Experience = lazy(() =>
  import("./components/Experience").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 150));
  })
);
const Feedbacks = lazy(() =>
  import("./components/Feedbacks").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 250));
  })
);
const Tech = lazy(() =>
  import("./components/Tech").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 180));
  })
);
const Works = lazy(() =>
  import("./components/Works").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 220));
  })
);
const StarsCanvas = lazy(() =>
  import("./components/canvas/Stars").then((module) => {
    return new Promise((resolve) => setTimeout(() => resolve(module), 300));
  })
);

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
