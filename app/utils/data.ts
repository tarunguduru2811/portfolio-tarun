// Replace these with your actual imports
import FlyingFoxLabsIcon from "../../public/assets/flyingfoxlabs.42072494.jpeg";

export const educationData = [
  {
    id: "1",
    institute: "Government Engineering College Rajkot",
    degree: "B.Tech in Computer Engineering",
    duration: "2021 – 2025",
    location: "Rajkot, Gujarat",
    gpa: "9.10",
    logo: "/gecr_logo.png", // Add the logo path if you have one
  },
  {
    id: "2",
    institute: "Samrat International School",
    degree: "Higher Secondary - Science",
    duration: "2019 – 2021",
    location: "Surat,Gujarat",
    gpa: "8.7",
    logo: "/samrat_logo.jpg",
  }
];

export const workExperienceData = [
  {
    id: "1",
    logo: FlyingFoxLabsIcon,
    company: "FlyingFox Labs Pvt Ltd",
    role: "Software Developer ",
    location: "Hyderabad, Telangana",
    duration: "Jun 2025 - Present",
    responsibilities: [
      "Built an AI-based passport photo system achieving 95% compliance accuracy across 100+ images",
      "Implemented Keycloak  SSO integration, cutting onboarding time by 30%",
      "Integrated MoonPay for fiat-to-crypto payments, enabling seamless onboarding  and reducing transaction friction by 30%.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Redis",
      "Redux",
      "PostgreSQL",
      "Docker",
      "Moonpay",
      "Zustand",
    ],
  },
  {
    id: "2",
    logo: FlyingFoxLabsIcon,
    company: "FlyingFox Labs Pvt Ltd",
    role: "Software Developer Intern",
    location: "Hyderabad, Telangana",
    duration: "Jan 2025 - Apr 2025",
    responsibilities: [
      " Integrated MetaMask to enable secure Ethereum blockchain transactions for 50+ users",
      "Developed a real-time multiplayer game with Socket.io, boosted interactivity & engagement",
      "Optimized performance with 15% faster page load times.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tamagui",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "Docker",
      "Ethers"
    ],
  },
];
