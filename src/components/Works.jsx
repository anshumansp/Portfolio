import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

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
    window.location.href = webpage_link;
  };
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.75)}>
    //   <Tilt
    //     options={{
    //       max: 45,
    //       scale: 1,
    //       speed: 450,
    //     }}
    //     className="bg-tertiary cursor-pointer p-5 rounded-2xl  w-full sm:w-[360px] max-w-screen-xl"
    //     onClick={handleClick}
    //   >
        <div onClick={handleClick} className="bg-tertiary cursor-pointer p-5 rounded-2xl  w-full sm:w-[360px] max-w-screen-xl">
          <div
            onClick={handleClick}
            className="relative w-full cursor-pointer sm:h-[230px] h-[350px]"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div onClick={handleClick} className="cursor-pointer mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div
            onClick={handleClick}
            className="cursor-pointer mt-4 flex justify-start"
          >
            <p>
              <span> Visit Project : </span>
              <a href={webpage_link} className="text-[#b564ed]">
                {name}
              </a>
            </p>
          </div>

          <div
            onClick={handleClick}
            className="cursor-pointer mt-4 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
    //   </Tilt>
    // </motion.div>
  );
};

const Works = () => {
  return (
    <div className="sm:px-16 px-6 sm:py-10 py-16 max-w-7xl mx-auto" id="work">
      <motion.div variants={textVariant()}>
        <p className={`mb-6 ${styles.sectionSubText}`}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondarytext-[17px] leading-[30px]"
        >
          Following are my recent projects that serve as a proof to my caliber
          as a full-stack developer. Each project is accompanied by a concise
          description and links to their respective code repositories. These
          projects not only showcase my technical skills, but also reflect my
          problem-solving abilities and application development skills.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
// export default SectionWrapper(Works, "work");
