import React, { useContext, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import MobileContext from "../context/mobileContext";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateX(0)" : "translateX(100px)",
        filter: isActive ? "blur(0)" : "blur(5px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
        isActive ? "z-10" : "-z-10"
      }`}
    >
      <div className="bg-gradient-to-br from-[#1e1b4b] via-[#2d1b4b] to-[#3b1d59] rounded-xl overflow-hidden shadow-lg p-6 md:p-8 border border-[#915eff]/20 h-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start h-full">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#915eff] ring-2 ring-purple-500/20 shadow-lg shadow-purple-500/10">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Quote */}
            <div className="relative">
              <svg
                className="absolute -top-4 -left-3 w-8 h-8 text-[#915eff]/30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.118-.837.182-.79.195.046.013.405.15 1.076.41.67.26 1.144.42 1.42.48.277.06.63.086 1.06.086.333 0 .624-.04.872-.12.496-.107.914-.396 1.254-.866.34-.47.51-1.05.51-1.738 0-.623-.138-1.14-.415-1.552-.276-.414-.7-.736-1.27-.966-.57-.23-1.144-.347-1.72-.347-.815 0-1.54.22-2.18.66-.64.44-1.11.988-1.41 1.643-.3.655-.45 1.4-.45 2.233 0 .815.14 1.536.42 2.162.28.626.73 1.162 1.35 1.61.62.45 1.29.672 2.02.672.86 0 1.57-.226 2.14-.677.57-.45.92-.974 1.06-1.57.14-.596.09-1.28-.14-2.054z" />
                <path d="M21.632 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.573.118-.837.182-.79.195.046.013.405.15 1.076.41.67.26 1.144.42 1.42.48.277.06.63.086 1.06.086.333 0 .624-.04.872-.12.496-.107.914-.396 1.254-.866.34-.47.51-1.05.51-1.738 0-.623-.138-1.14-.415-1.552-.276-.414-.7-.736-1.27-.966-.57-.23-1.144-.347-1.72-.347-.815 0-1.54.22-2.18.66-.64.44-1.11.988-1.41 1.643-.3.655-.45 1.4-.45 2.233 0 .815.14 1.536.42 2.162.28.626.73 1.162 1.35 1.61.62.45 1.29.672 2.02.672.86 0 1.57-.226 2.14-.677.57-.45.92-.974 1.06-1.57.14-.596.09-1.28-.14-2.054z" />
              </svg>
              <div className="text-gray-200 text-sm md:text-base leading-relaxed italic mt-2">
                "{testimonial}"
              </div>
            </div>

            {/* Author info */}
            <div className="mt-6 flex flex-col">
              <h4 className="font-semibold text-white text-base md:text-lg">
                {name}
              </h4>
              <div className="flex items-center mt-1">
                <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-[#915eff] mr-2"></div>
                <p className="text-[#a3a3ff] text-xs md:text-sm">
                  {designation} • {company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialControls = ({
  current,
  total,
  setCurrent,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Previous button */}
      <button
        onClick={handlePrev}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1b4b] border border-purple-500/30 text-white hover:bg-purple-900/50 transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#915eff] w-8"
                : "bg-gray-600 w-3 opacity-50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1b4b] border border-purple-500/30 text-white hover:bg-purple-900/50 transition-all duration-300"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto rotation - faster speed (4 seconds instead of 6)
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000); // Change testimonial every 4 seconds (faster)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  // Pause auto rotation on hover
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} my-5`}>What People Say</p>
          <h2 className={`${styles.sectionHeadText} mt-6`}>Testimonials.</h2>
        </motion.div>

        <div
          className="relative mt-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#915eff] to-purple-600 opacity-10 blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 opacity-10 blur-2xl"></div>

          {/* Main container */}
          <div className="relative mx-auto h-[260px] md:h-[220px] overflow-hidden mb-8">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={index}
                {...testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8">
            <TestimonialControls
              current={currentIndex}
              total={testimonials.length}
              setCurrent={setCurrentIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
