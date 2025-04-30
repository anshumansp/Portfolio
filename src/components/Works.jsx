import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  webpage_link,
  source_code_link,
}) => {
  const handleClick = () => {
    window.open(webpage_link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
    >
      <div className="bg-gradient-to-br from-[#1a1a2d] via-[#252540] to-[#2d2d4a] rounded-2xl overflow-hidden h-full flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 border border-[#915eff]/20 hover:border-[#915eff]/30">
        {/* Project image */}
        <div
          className="relative cursor-pointer h-48 overflow-hidden"
          onClick={handleClick}
        >
          <div className="w-full h-full flex items-center justify-center bg-black">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* GitHub link */}
          <div className="absolute top-3 right-3 z-10">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank", "noopener,noreferrer");
              }}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-black hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
          <p className="text-secondary text-sm flex-1">{description}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-black/20`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* View Project button */}
          <button
            onClick={handleClick}
            className="mt-4 py-2 px-4 bg-gradient-to-r from-[#1a1a2d] to-[#2d2d4a] text-white text-sm font-medium rounded-lg transition-all duration-300 border border-[#915eff]/20 hover:border-[#915eff]/50 hover:shadow-purple-900/30 flex items-center justify-center gap-2"
          >
            View Project
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden"
      id="projects"
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} my-5`}>My work</p>
        <h2 className={`${styles.sectionHeadText} mt-6`}>Projects.</h2>
      </motion.div>

      <div className="w-full mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p>
          These projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. They reflect my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
