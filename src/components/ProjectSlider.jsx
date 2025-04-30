import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectSlider = () => {
  // Get the top 5 projects
  const topProjects = projects.slice(0, 5);
  // Move CrownKing to the center (assuming it's the first project)
  const centerProject = topProjects[0]; // CrownKing
  const leftProjects = [topProjects[1], topProjects[2]]; // Two left projects
  const rightProjects = [topProjects[3], topProjects[4]]; // Two right projects

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden">
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

      {/* Staggered project showcase - desktop */}
      <div className="hidden md:block relative max-w-[1400px] mx-auto h-[300px] px-16 mb-20">
        {/* Center project - largest */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[460px]">
          <ProjectPreview
            project={centerProject}
            scale={1.0}
            zIndex={30}
            rotation={0}
          />
        </div>

        {/* Left side projects - smaller and staggered */}
        <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 z-20 w-[380px]">
          <ProjectPreview
            project={leftProjects[0]}
            scale={0.85}
            zIndex={20}
            rotation={-5}
          />
        </div>
        <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-10 w-[360px]">
          <ProjectPreview
            project={leftProjects[1]}
            scale={0.7}
            zIndex={10}
            rotation={-10}
          />
        </div>

        {/* Right side projects - smaller and staggered */}
        <div className="absolute right-[15%] top-1/2 transform -translate-y-1/2 z-20 w-[380px]">
          <ProjectPreview
            project={rightProjects[0]}
            scale={0.85}
            zIndex={20}
            rotation={5}
          />
        </div>
        <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 z-10 w-[360px]">
          <ProjectPreview
            project={rightProjects[1]}
            scale={0.7}
            zIndex={10}
            rotation={10}
          />
        </div>
      </div>

      {/* Mobile layout - Simple carousel */}
      <div className="md:hidden relative px-4 mb-16">
        <div className="flex flex-col gap-6">
          {topProjects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectPreview
                project={project}
                scale={1}
                zIndex={10}
                rotation={0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectPreview = ({ project, scale = 1, zIndex = 10, rotation = 0 }) => {
  const { name, image, webpage_link } = project;

  const handleClick = () => {
    window.open(webpage_link, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * zIndex }}
      viewport={{ once: true }}
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        zIndex: zIndex,
      }}
      className="relative w-full transition-all duration-300 hover:z-50 hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative w-full rounded-xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 bg-black">
        <div className="w-full aspect-[16/9] bg-black">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-white/80">View Project</span>
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSlider;
