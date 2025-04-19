import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  snugstaff,
  corsrex,
  listnote,
  newswave,
  urbanly,
  corsrexv1,
  textutils,
  computer,
  threejs,
  sazagLogo,
  newITLogo,
  freelanceLogo,
} from "../assets";

// Import the project images
import crownkingImg from "../assets/crownking.png";
import kiarosImg from "../assets/kiaros.png";
import pixelizeImg from "../assets/pixelize.png";
import physioImg from "../assets/physio.png";
import chatbotImg from "../assets/chatbot.png";
import vibesImg from "../assets/vibes.png";

// Import testimonial images
import prameyaImg from "../assets/prameya.jpeg";
import sanketImg from "../assets/sanket.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Sazag Infotech Private Limited",
    icon: sazagLogo,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Built AI-powered RAG systems for 40% better information retrieval accuracy.",
      "Optimized vector databases, reducing query response times by 35%.",
      "Created AI tools and automation frameworks, saving 15+ hours weekly.",
      "Developed backend solutions with Nest.js, Python, and cloud integrations.",
      "Designed 3D visualizations with Three.js, increasing user engagement by 28%.",
      "Implemented Docker for consistent application delivery across environments.",
      "Led testing strategies that reduced post-deployment issues by 65%.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "New IT Nest Limited",
    icon: newITLogo,
    iconBg: "#E6DEDD",
    date: "September 2023 - March 2024",
    points: [
      "Delivered 5+ web solutions with focus on UX design and accessibility.",
      "Integrated APIs for client-side functionality, improving data sync by 42%.",
      "Migrated legacy apps to cloud platforms with 99.9% uptime.",
      "Optimized performance through code refactoring, reducing load times by 30%.",
      "Implemented responsive design for seamless cross-device experiences.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Freelance",
    icon: freelanceLogo,
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Built 10+ web solutions with 4.8/5 client satisfaction ratings.",
      "Implemented advanced APIs for e-commerce and service businesses.",
      "Enhanced cloud platform performance for 5 small business clients.",
      "Developed dynamic web apps using React.js and Next.js.",
      "Provided continuous technical support and feature implementations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Anshuman for his outstanding contributions as a frontend developer. His proficiency in frontend technologies, ability to design sophisticated interfaces, and expertise in API integration made him an invaluable asset to our team.",
    name: "Prameya Uppalapati",
    designation: "Director",
    company: "New IT Nest Ltd.",
    image: prameyaImg,
  },
  {
    testimonial:
      "I highly recommend Anshuman for their contributions in backend development. Their expertise in creating and optimizing databases greatly helped me in my project.",
    name: "Sanket Ghorpade",
    designation: "Deputy Manager - Business Solutions",
    company: "Axis Bank",
    image: sanketImg,
  },
  {
    testimonial:
      "Working with Anshuman was a game-changer for our startup. His technical expertise and problem-solving skills delivered a robust platform that exceeded our expectations. Highly recommended!",
    name: "Emma Johnson",
    designation: "Founder & CEO",
    company: "TechVenture Inc.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Anshuman's work on our e-commerce platform was exceptional. His attention to detail and innovative solutions significantly improved our user experience and conversion rates.",
    name: "Michael Schmidt",
    designation: "CTO",
    company: "Global Solutions GmbH",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "CrownKing",
    description:
      "CrownKing is a full-stack e-commerce platform specializing in premium men's jewelry. The application offers a seamless shopping experience with a sleek, modern interface for customers to browse and purchase high-quality jewelry items.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crownkingImg,
    webpage_link: "https://crownking.vercel.app/",
    source_code_link:
      "https://github.com/anshumansp/CrownKing-Premium-Men-s-Jewellery-",
  },
  {
    name: "Kiaros",
    description:
      "A comprehensive suite of productivity tools designed for professionals to streamline their workflow and boost efficiency. Includes PDF tools, image conversion, resume builder and more with modern, responsive UI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: kiarosImg,
    webpage_link: "https://kiaros.vercel.app/",
    source_code_link: "https://github.com/anshumansp/Kiaros-Tools",
  },
  {
    name: "Pixelize",
    description:
      "Pixelize is a modern and stylish digital agency Page. Designed for creative designers, agencies, freelancers, and photographers with responsive design and features typically found only in premium templates.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pixelizeImg,
    webpage_link: "https://pixelizesolution.com",
    source_code_link: "https://github.com/anshumansp/Pixelize",
  },
  {
    name: "PhysioAI",
    description:
      "PhysioCare is a cutting-edge, AI-powered web application designed to streamline client management and enhance customer support for physiotherapists, leveraging modern AI tools for a seamless experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: physioImg,
    webpage_link: "https://physio-care.vercel.app/",
    source_code_link: "https://github.com/anshumansp/PhysioCare",
  },
  {
    name: "Consultix",
    description:
      "An AI-powered business consultant using Deepseek Chat model, offering real-time expertise in strategy, tech, and management for business strategy, market analysis, and project management.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: chatbotImg,
    webpage_link: "https://consultix.netlify.app/",
    source_code_link: "https://github.com/anshumansp/Business_Consultant_Agent",
  },
  {
    name: "Vibes",
    description:
      "React app for messaging using socket io for real-time communication between users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: vibesImg,
    webpage_link: "https://vibechats.vercel.app",
    source_code_link: "https://github.com/anshumansp/Vibe-Chat",
  },
  {
    name: "Corsrex",
    description:
      "A course-selling web app, which lets users purchase various courses, and it evolved to a complete web app with Express, MongoDB, and Node.js integration.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: corsrex,
    webpage_link: "https://corsrex.netlify.app",
    source_code_link: "https://github.com/anshumansp/Corsrex",
  },
  {
    name: "Urbanly",
    description:
      "Urbanly is a real-estate web application made using React and pure CSS3. It seamlessly caters to clients' creative needs, having full responsiveness for an exceptional user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "jsx",
        color: "pink-text-gradient",
      },
    ],
    image: urbanly,
    webpage_link: "https://urbanly.netlify.app/",
    source_code_link: "https://github.com/anshumansp/Urbanly",
  },
  {
    name: "NewsWave",
    description:
      "Newswave is a news application powered by News API, showcasing latest news on various categories. Although it's only available for localhost, but it have a sleek UI, with modern features like infinite scroll and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: newswave,
    webpage_link: "https://github.com/anshumansp/NewsWave-React",
    source_code_link: "https://github.com/anshumansp/NewsWave-React",
  },
  {
    name: "Corsrex 1.0",
    description:
      "It was the initial version of that same course selling app listed above, which lets users purchase various courses. It is just a single page website, yet pretty much interactive.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: corsrexv1,
    webpage_link: "https://corsrex-v1.netlify.app/",
    source_code_link: "https://github.com/anshumansp/trial-corsrex",
  },
];

const computerImage = {
  img: computer,
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  computerImage,
};
