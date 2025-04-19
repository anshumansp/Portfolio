import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const ProjectSlider = () => {
  return (
    <section className="relative w-full min-h-screen pt-12 pb-32 bg-black">
      {/* Section header */}
      <div className="container mx-auto px-8 mb-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`${styles.sectionSubText} mb-4 text-gray-300`}>
            MY WORK SPEAKS
          </p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>Projects</h2>
          <p className="text-gray-400 text-[17px] max-w-3xl mx-auto leading-[30px]">
            Explore my portfolio of high-performance, modern applications built
            with cutting-edge technologies. Each project showcases my skills in
            creating exceptional user experiences and solving complex problems.
          </p>
        </motion.div>
      </div>

      {/* Staggered project display - image only */}
      <div className="relative w-full overflow-hidden">
        {/* Desktop layout - Staggered/overlapping design */}
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="w-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={`project-${index}`} className="max-w-lg">
                  <ProjectImageCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Mobile layout - Simple cards */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full px-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={`project-${index}`}>
                <ProjectImageCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Image-only card with enhanced hover effects
const ProjectImageCard = ({ project }) => {
  const { name, image, webpage_link, source_code_link } = project;

  const handleClick = () => {
    window.open(webpage_link, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative bg-black rounded-2xl p-2 shadow-xl transform transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden group border border-white/10"
      onClick={handleClick}
    >
      {/* Project image with increased height */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
        />

        {/* Animated hover overlay with project name */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-b from-black/60 to-black/90 transform translate-y-8 group-hover:translate-y-0">
          {/* Project title with glowing effect */}
          <h3 className="text-white font-bold text-[32px] mb-4 text-center px-4 relative">
            <span className="relative z-10">{name}</span>
            <span className="absolute inset-0 blur-md bg-gradient-to-r from-white to-gray-800 opacity-20 z-0"></span>
          </h3>

          {/* Animated button */}
          <span className="px-6 py-2 bg-gradient-to-r from-white to-gray-800 text-black font-medium rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:shadow-xl hover:shadow-white/20">
            View Project
          </span>
        </div>

        {/* GitHub link with enhanced styling */}
        <div className="absolute top-3 right-3 z-10 transform translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer bg-black hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white shadow-lg"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain group-hover:invert-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSlider;
