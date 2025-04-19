import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ContentCreator = () => {
  return (
    <div className="container mx-auto px-6 pt-16 pb-24">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} my-5`}>
          I create educational content
        </p>
        <h2 className={`${styles.sectionHeadText} mt-6`}>Content.</h2>
      </motion.div>

      <div className="flex flex-col items-center mt-10">
        {/* YouTube Video Embed with subtle shadow */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden mb-12 md:px-8"
        >
          <div className="relative w-full h-full rounded-xl shadow-[0_0_15px_rgba(220,220,220,0.1)]">
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
          <a
            href="https://www.youtube.com/@thepixelizesolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#1a1a2d] to-[#323250] text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 border border-purple-500/30"
          >
            <span className="mr-3 text-lg">Subscribe to My Channel</span>
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
