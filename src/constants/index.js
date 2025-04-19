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
      "Implemented agentic systems and RAG (Retrieval-Augmented Generation) solutions for AI-powered applications, resulting in a 40% increase in information retrieval accuracy.",
      "Designed and optimized vector databases to handle embeddings for improved performance in AI workflows, reducing query response time by 35%.",
      "Developed and deployed AI-powered tools, chrome extensions, and automation frameworks to streamline client operations, saving an estimated 15 hours of manual work per week.",
      "Engineered robust back-end solutions using Nest.js, Python and integrated Google Cloud and AWS for scalable deployments handling up to 10,000 concurrent users.",
      "Built immersive 3D visualizations using Three.js, Next.js and enhanced web interactivity through advanced technologies, increasing user engagement by 28%.",
      "Leveraged containerization tools like Docker to ensure consistent and efficient application delivery across multiple development environments.",
      "Collaborated with cross-functional teams to implement comprehensive testing strategies, reducing post-deployment issues by 65%.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "New IT Nest Limited",
    icon: newITLogo,
    iconBg: "#E6DEDD",
    date: "September 2023 - March 2024",
    points: [
      "Delivered end-to-end custom web solutions for 5+ clients, focusing on user-centric design and accessibility standards (WCAG 2.1).",
      "Integrated advanced back-end systems and RESTful APIs for seamless client-side functionality, improving data synchronization by 42%.",
      "Successfully migrated 3 legacy applications to cloud platforms ensuring enhanced scalability and performance with 99.9% uptime.",
      "Optimized website performance through code refactoring and asset optimization, achieving a 30% reduction in load times.",
      "Implemented responsive design principles across all projects, ensuring seamless experiences across desktop, tablet, and mobile devices.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Freelance",
    icon: freelanceLogo,
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Developed and delivered 10+ custom web solutions with a focus on user-friendly design and accessibility, receiving 4.8/5 average client satisfaction ratings.",
      "Integrated advanced back-end systems and APIs, ensuring smooth and efficient client-side functionality for e-commerce and service-based businesses.",
      "Led successful application migrations to cloud platforms, enhancing scalability and overall performance for 5 small business clients.",
      "Utilized modern frameworks including React.js and Next.js to create dynamic, interactive web applications with reduced development time.",
      "Maintained ongoing relationships with clients, providing technical support and implementing new features based on evolving business needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bring me a project, and we'll do something amazing together. Who needs testimonials to flex when you have skills like mine?",
    name: "Riya Sharma",
    designation: "CFO",
    company: "A Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Bring me a project, and we'll do something amazing together. Who needs testimonials to flex when you have skills like mine?",
    name: "Chris Brown",
    designation: "COO",
    company: "B Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Bring me a project, and we'll do something amazing together. Who needs testimonials to flex when you have skills like mine?",
    name: "Lisa Wang",
    designation: "CTO",
    company: "C Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Snugstaff",
  //   description:
  //     "Snugstaff is a platform catering to businesses, providing short-term property renting solutions same as Airbnb. It is a startup running up and I built the frontend using my React and MUI skills.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "MUI",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: snugstaff,
  //   webpage_link: "https://snugstaff.com/",
  //   source_code_link: "https://github.com/anshumansp?tab=repositories",
  // },
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
    name: "Notex",
    description:
      "A Cloud-based react app, which provides note-taking with efficient organization. Users seamlessly manage notes, with secure login/signup, and CRUD functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: listnote,
    webpage_link: "https://notx.netlify.app/login",
    source_code_link: "https://github.com/anshumansp/Notex",
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
