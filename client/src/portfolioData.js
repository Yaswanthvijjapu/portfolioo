import { Github, Linkedin, Mail, Code2, Trophy, LineChart } from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Yaswanth Vijjapu",
    role: "MERN Stack Developer | Problem Solver",
    description: "I create beautiful, responsive, and user-friendly web applications using modern technologies. Passionate about turning complex problems into elegant interfaces.",
  },
  socials:[
    { icon: Github, link: "https://github.com/Yaswanthvijjapu", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/yaswanth-vijjapu-2572a7291", label: "LinkedIn" },
    { icon: Mail, link: "mailto:yaswanthvijjapu799@gmail.com", label: "Email" },
  ],
  skills: [
    { category: "Frontend", items:["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"] },
    { category: "Languages & Tools", items:["JavaScript", "Python", "C++", "Git", "GitHub"] }
  ],
  projects:[
    {
      id: 1,
      title: "FarmDirect",
      category: "Fullstack",
      description: "A digital marketplace connecting farmers directly with consumers and retailers, eliminating middlemen.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/images/Farmdirectimg.jpg",
      github: "https://github.com/Yaswanthvijjapu/Farm-Direct",
      live: "https://farmdirect-beta.vercel.app/" 
    },
    {
      id: 2,
      title: "Formify",
      category: "Fullstack",
      description: "Create, customize, and manage forms with ease. Design fields, collect responses, and export data as CSV/PDF.",
      tech:["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: "/images/Formify.png",
      github: "https://github.com/Yaswanthvijjapu/Form",
      live: "https://form-two-sand.vercel.app/"
    },
    {
      id: 3,
      title: "AI Code Reviewer",
      category: "AI Integration",
      description: "An AI-driven code reviewer powered by Google Gemini. Provides instant feedback on code quality and security.",
      tech:["React", "Node.js", "Express", "Gemini API"],
      image: "/images/Code-Review.png",
      github: "https://github.com/Yaswanthvijjapu/review",
      live: "https://code-review-khaki.vercel.app/"
    },
    {
      id: 4,
      title: "Coded-pad",
      category: "Tools",
      description: "A collaborative code snippet manager with an integrated code editor for saving and sharing code.",
      tech:["React", "Node.js", "Express"],
      image: "/images/Coded-pad.png",
      github: "https://github.com/Yaswanthvijjapu/Coded-pad",
      live: "https://coded-pad-pied.vercel.app/"
    },
    {
      id: 5,
      title: "Restaurant Finder",
      category: "Web App",
      description: "Search for restaurants based on location and cuisine, and view detailed menus, reviews, and ratings.",
      tech:["React", "Node.js", "MongoDB", "Express"],
      image: "/images/Restaurantimg.png",
      github: "https://github.com/Yaswanthvijjapu/Restaurant",
      live: "https://restaurant-251.vercel.app/"
    }
  ],
  achievements:[
    {
      id: 1,
      year: "Top 12%",
      role: "LeetCode Problem Solver",
      company: "300+ Problems Solved",
      description: "Consistently participating in contests, solving complex algorithmic challenges, and ranking in the top 12% globally.",
      icon: Code2
    },
    {
      id: 2,
      year: "Max Rating: 1602",
      role: "CodeChef 3-Star",
      company: "Competitive Programming",
      description: "Achieved a 3-star rating on CodeChef by consistently solving competitive programming challenges.",
      icon: Trophy
    },
    {
      id: 3,
      year: "Max Rating: 1155",
      role: "Codeforces",
      company: "Algorithmic Contests",
      description: "Active participant in global Codeforces contests, demonstrating strong data structure and math skills.",
      icon: LineChart
    }
  ]
};