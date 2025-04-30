import React, { useContext } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import MobileContext from "../context/mobileContext";
import { indiaFlag, usaFlag, ukFlag } from "../assets";

const Hero = () => {
  const isMobile = useContext(MobileContext);

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Country flag data with image sources and alt text
  const countryFlags = [
    { src: indiaFlag, alt: "India", title: "India" },
    { src: usaFlag, alt: "United States", title: "United States" },
    { src: ukFlag, alt: "United Kingdom", title: "United Kingdom" },
  ];

  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center justify-center pt-16">
      {/* Darker background gradient */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Small animated stars/particles for background effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main heading with modern animation */}
          <motion.h1
            className="text-white mb-8 text-center mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Code. Create. Conquer.
              </span>
            </div>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-gray-300 text-[18px] sm:text-[20px] font-medium max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Powerful Solutions. Real Results.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={scrollToWork}
              className="bg-gradient-to-r from-gray-800 to-white text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block hover:shadow-lg hover:shadow-white/20"
            >
              View My Work
            </button>
          </motion.div>

          {/* Trust badges/social proof with flag icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm mb-4 w-full">
              Trusted by clients from
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {countryFlags.map((flag, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  title={flag.title}
                >
                  <img
                    src={flag.src}
                    alt={flag.alt}
                    className="w-10 h-6 object-cover rounded-sm hover:shadow-md hover:shadow-white/20 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Move hovering indicator to the right corner */}
      <div className="absolute bottom-10 right-10 md:right-16 z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
