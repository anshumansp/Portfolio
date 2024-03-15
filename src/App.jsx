import { lazy, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import {Hero, Navbar} from './components';
import MobileState from './context/MobileState';

const About = lazy(()=> import('./components/About'))
const Contact = lazy(()=> import('./components/Contact'))
const Experience = lazy(()=> import('./components/Experience'))
const Feedbacks = lazy(()=> import('./components/Feedbacks'))
const Tech = lazy(()=> import('./components/Tech'))
const Works = lazy(()=> import('./components/Works'))
const StarsCanvas = lazy(()=> import('./components/canvas/Stars'))

const App = () =>  {
  return (
    <MobileState>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat-bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        </Suspense>
      </div>
    </BrowserRouter>
    </MobileState>
  )
}

export default App