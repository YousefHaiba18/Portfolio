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
  microfocus,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  SierraWireless,
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
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Automation Engineer",
    icon: backend,
  },
  {
    title: "Solutions Engineer/Architect",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Intern",
    company_name: "Micro Focus",
    icon: microfocus,
    iconBg: "#383E56",
    date: "June 2021 - August 2021",
    points: [
      "Developed automated GUI and API tests using UFT One to enhance software quality assurance",
      "Designed modular test structures for improved efficiency and maintainability",
      "Executed tests on web applications and local programs, analyzing results for future optimizations",
      "Gained hands-on experience in continuous testing and DevOps methodologies",
    ],
  },
  {
    title: "Software Developer Co-op",
    company_name: "Sierra Wireless",
    icon: SierraWireless,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - August 2023",
    points: [
      "Resolved driver and firmware issues using C++, increasing module efficiency by 10%",
      "Migrated Android module testing to x86 PCs, reducing setup time by 25%",
      "Automated API analysis with Python, presenting results on an interactive HTML page",
      "Conducted stress testing on NXP device workstations, analyzing cellular logs to improve module stability",
    ],
  },
  {
    title: "Software Developer Co-op",
    company_name: "Safe Fleet",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Integrated Jenkins with Jira using Python, improving test cycle management and build tracking",
      "Developed a GPT-based AI tool for error prediction and automated resolution, reducing manual intervention",
      "Automated test cycle cloning in Jira, reducing workload by 25% and optimizing test execution",
    ],
  },
  {
    title: "Solution Engineer Architect Intern",
    company_name: "BMC Software",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Developed a Python-based guided demo script to showcase AIOps and Digital Workplace tools, enhancing pre-sales engagement",
      "Designed a Flask web app with custom server and scenario management, reducing setup time by 30%",
      "Automated historical metrics ingestion for DWP services, cutting manual data processing by 40%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UFC Predictive Modelling",
    description:
      "A machine learning model that predicts UFC fight outcomes using historical data and statistical analysis, helping identify key performance metrics and trends to improve fight strategy and decision-making.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ScikitLearn",
        color: "green-text-gradient",
      },
      {
        name: "DataAnalysis",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/xgill15x/UFC-Dataset-Analysis",
  },
  {
    name: "Deny and Conquer Multiplayer Game",
    description:
      "A multiplayer strategy board game with real-time client-server interactions, built using Java and JavaFX, featuring low-latency communication, responsive UI, and scalable game logic for smooth and competitive gameplay.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "Networking",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sajantoor/Deny-And-Conquer-Game",
    video_demo_link: "https://www.youtube.com/watch?v=QEFrlTVCZQ8",

  },
  {
    name: "2D food delivery game",
    description:
      "A 2D food delivery game developed in Java, featuring player movement, enemy tracking, and an interactive UI. Built using JFrame and Maven, with automated testing via JUnit to enhance functionality and code reliability.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JFrame",
        color: "green-text-gradient",
      },
      {
        name: "JUnit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://docs.google.com/presentation/d/1JXotEK3rqdADPHZ9dHhLBdNltynNCYvY9V1bcxKXjM8/edit#slide=id.g12178818355_0_326",
  },
];

export { services, technologies, experiences, testimonials, projects };
