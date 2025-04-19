import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Create intersection observer with larger rootMargin to preload earlier
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: "200px 0px", // Preload when within 200px of viewport
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <motion.section
        ref={sectionRef}
        variants={staggerContainer()}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        className={`${styles.padding} max-w-7xl mx-auto
            relative z-0`}
      >
        <span className="has-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
