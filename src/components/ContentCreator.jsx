import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ContentCreator = () => {
  return (
    <div className="container mx-auto px-6 pt-16 pb-24">
      <motion.div variants={textVariant()} className="mb-12 text-center">
        <h2 className={`${styles.sectionHeadText} mb-4`}>Content Creator</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 text-lg max-w-3xl mx-auto"
        >
          I create educational content on the latest technologies in AI
          development, full-stack web development, and modern tools for
          developers.
        </motion.p>
      </motion.div>

      <div className="flex flex-col items-center">
        {/* YouTube Video Embed - Slightly Smaller */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl mb-12 md:px-8"
        >
          <div className="relative w-full h-full p-1 bg-gradient-to-r from-red-600 to-red-800 rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8Ids9hNY-7U?si=1gyKHVpR828cHFy_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </motion.div>

        {/* Simplified content with just one point */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="text-center max-w-3xl"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-white p-[1px] rounded-full mr-3">
              <div className="bg-black p-2 rounded-full">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-white"></div>
              </div>
            </div>
            <p className="text-gray-300 text-xl">
              From AI development to modern web frameworks — practical knowledge
              for developers
            </p>
          </div>

          <a
            href="https://www.youtube.com/@thepixelizesolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
          >
            <span className="mr-3 text-lg">Subscribe to Channel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContentCreator, "content");
