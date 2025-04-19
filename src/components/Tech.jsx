import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

// SVG icons for the new skills
const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto">
    <linearGradient
      id="python-original-a"
      gradientUnits="userSpaceOnUse"
      x1="70.252"
      y1="1237.476"
      x2="170.659"
      y2="1151.089"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient
      id="python-original-b"
      gradientUnits="userSpaceOnUse"
      x1="209.474"
      y1="1098.811"
      x2="173.62"
      y2="1149.537"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#python-original-a)"
      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      transform="translate(0 10.26)"
    />
    <path
      fill="url(#python-original-b)"
      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      transform="translate(0 10.26)"
    />
  </svg>
);

const AIIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 mx-auto text-purple-500"
  >
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
    <path d="M7.5 14.5A3.5 3.5 0 0 0 11 18a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11 11a3.5 3.5 0 0 0-3.5 3.5z" />
  </svg>
);

const AgenticSystemsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 mx-auto text-indigo-500"
  >
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
    <circle cx="9" cy="9" r="2" />
    <circle cx="9" cy="15" r="2" />
    <path d="M17 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 0V16" />
  </svg>
);

// Additional skill components
const additionalSkills = [
  {
    name: "Python",
    icon: <PythonIcon />,
  },
  {
    name: "AI",
    icon: <AIIcon />,
  },
  {
    name: "Agentic Systems",
    icon: <AgenticSystemsIcon />,
  },
];

const SkillCard = ({ name, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.random() * 0.5, 0.75)}
      className="w-24 sm:w-28 md:w-32 bg-gradient-to-br from-[#1e1b4b] via-[#2d1b4b] to-[#3b1d59] rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-[#915eff]/20 shadow-lg shadow-purple-900/5 hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-12 w-12 flex items-center justify-center">
        {typeof icon === "string" ? (
          <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        ) : (
          icon
        )}
      </div>
      <p className="text-white/90 text-xs font-medium text-center mt-2">
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} my-5`}>My Technology Stack</p>
        <h2 className={`${styles.sectionHeadText} mt-6`}>Skills.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <SkillCard
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
          />
        ))}

        {additionalSkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
