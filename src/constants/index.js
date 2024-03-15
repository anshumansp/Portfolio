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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Node JS Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // ,
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "It is just an example component section to display how the experiences will look like if I have had done any corporate jobs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "It is just an example component section to display how the experiences will look like if I have had done any corporate jobs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "It is just an example component section to display how the experiences will look like if I have had done any corporate jobs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "It is just an example component section to display how the experiences will look like if I have had done any corporate jobs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
  {
    name: "Snugstaff",
    description:
      "Snugstaff is a platform catering to businesses, providing short-term property renting solutions same as Airbnb. It is a startup running up and I built the frontend using my React and MUI skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: snugstaff,
    webpage_link: "https://snugstaff.com/",
    source_code_link: "https://github.com/anshumansp?tab=repositories",
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
