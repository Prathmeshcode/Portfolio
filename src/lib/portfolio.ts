export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  features?: string[];
  tech?: string[];
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const profile = {
  name: "Prathmesh Dhote",
  profession: "Full Stack Developer | Software Engineer",
  education:
    "Final Year B.E. in Information Technology — Government College of Engineering Aurangabad",
  working: "Sthapatya Counsultant Pvt. Ltd. — Software Developer",
  location: "Maharashtra, India",
  tagline:
    "Full-Stack Developer passionate about building scalable software, solving real-world problems, and blending technology with creativity.",
  techFirm: {
    name: "KalaGoon Software Solutions Pvt. Ltd.",
    headline: "Engineering the Future of Business.",
    url: "https://kalagoon.vercel.app/",
    blurb:
      "My startup focused on premium software solutions — system design, full-stack development, and UX/UI excellence.",
  },
  hero: {
    headline: "Hi, I'm Prathmesh Dhote",
    title: "Full Stack Developer & Creative Technologist",
    subtext:
      "I build scalable software, modern web applications, and innovative digital experiences.",
  },
  personalities: [
    {
      title: "Software Engineer",
      subtitle: "Builds systems that scale",
      blurb:
        "Modern web apps, clean architecture, reliable delivery, and product-focused engineering.",
    },
    {
      title: "Problem Solver",
      subtitle: "Turns ambiguity into shipping",
      blurb:
        "Strong debugging + analytical thinking, database design, and API-first solutions for real-world needs.",
    },
    {
      title: "Creative Artist",
      subtitle: "Story + emotion in tech",
      blurb:
        "Music, theatre, storytelling, and content creation — a creative lens that makes software feel alive.",
    },
  ],
  links: {
    email: "mailto:prathmeshdhote@gmail.com",
    linkedin: "https://linkedin.com/in/prathmesh-dhote-92b846230",
    github: "https://github.com/Prathmeshcode",
    youtube: "https://www.youtube.com/@Passion_Drift",
    portfolio: "https://your-domain.com",
    resume: "/resume.txt",
    techFirm: "https://kalagoon.vercel.app/",
    whatsapp: "https://wa.me/919529169879",
  } satisfies Record<string, string>,
};

export const summary = [
  "Final-year IT engineering student and aspiring Full-Stack Developer with practical experience building web applications, database systems, and software solutions for real-world problems.",
  "Worked with React, JavaScript, MERN, ASP.NET Core, SQL Server, and Java — focused on responsive, scalable, user-centric applications.",
  "Hands-on experience across web development, database architecture, backend API development, and software system design.",
  "Passionate about music, theatre, storytelling, and content creation — bringing creativity and unique perspectives into engineering.",
  "Goal: build impactful products, contribute to innovative teams, and eventually establish a tech firm.",
];

export const skills = {
  "Programming Languages": ["Java", "JavaScript", "C#", "SQL", "HTML5", "CSS3"],
  "Frontend Development": [
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
    "jQuery",
    "Modern UI/UX principles",
    "Animation-based UI",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "ASP.NET Core",
    "REST API Development",
    "Authentication systems",
  ],
  Database: ["SQL Server", "MongoDB", "Database Design", "Query Optimization", "Stored Procedures"],
  "Tools & Platforms": ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "npm", "NuGet"],
  "Additional Technologies": [
    "MERN Stack Development",
    "GIS-based software systems",
    "Municipal software architecture",
    "Android development (Kotlin basics)",
  ],
} satisfies Record<string, string[]>;

export const internships: Experience[] = [
  {
    company: "TechGuru",
    role: "Software Development Intern",
    summary:
      "Worked on real-world software development tasks and gained experience in backend development and system architecture.",
    highlights: [
      "Backend API development",
      "Database design",
      "Code optimization",
      "Software debugging",
    ],
  },
  {
    company: "Rentlee",
    role: "Software Development Intern",
    summary:
      "Built and improved software systems for real-world business use and collaborated in development teams.",
    highlights: [
      "Web application development",
      "Frontend & backend integration",
      "Handling real-world client requirements",
      "Team-based development workflows",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Hotel Management System",
    description:
      "Manage hotel operations and generate accurate billing for tables and orders with a dynamic UI.",
    features: [
      "Order management",
      "Bill generation",
      "Product tracking",
      "Table-wise billing",
      "Dynamic UI",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MERN Stack"],
  },
  {
    title: "Inventory Management System",
    description:
      "Product inventory management with database connectivity and scalable CRUD architecture.",
    features: [
      "Product tracking",
      "Stock management",
      "Database integration",
      "CRUD operations",
      "Scalable architecture",
    ],
    tech: ["ASP.NET Core", "SQL Server", "C#"],
  },
  {
    title: "AI Study Planner (Exam Preparation System)",
    description:
      "Smart exam planning for JEE / MHT-CET with performance analysis and study analytics.",
    features: [
      "Exam selection",
      "Student performance analysis",
      "Smart planning system",
      "Study analytics",
    ],
  },
  {
    title: "Real Estate Landing Page (Butterfly Project)",
    description:
      "Pixel-perfect responsive real-estate landing page built with modern UI principles.",
    tech: ["React", "Tailwind CSS", "Responsive UI design"],
  },
  {
    title: "Business Website Builder Concept",
    description:
      "Scalable template system enabling businesses to launch branded sites fast with minimal effort.",
    features: [
      "Customizable websites for businesses",
      "Branding solutions",
      "Easy business management UI concept",
    ],
  },
];

export const learningNow = [
  "ASP.NET Core Advanced",
  "SQL Server Architecture",
  "Android Development (Kotlin)",
  "GIS Software Systems",
  "Municipal Software Architecture",
];

export const creative = {
  music: {
    title: "Music",
    points: ["Instrumental harmonium music", "Sharing on YouTube"],
  },
  theatre: {
    title: "Theatre",
    points: ["Acting", "Script writing", "Directing", "Winning theatre productions"],
  },
  storytelling: {
    title: "Storytelling & Content Creation",
    points: [
      "Story-based reels inspired by Indian epics and characters",
      "Current concept: Duryodhan story series",
      "Deeper character psychology + suspense-driven storytelling",
    ],
  },
};

export const strengths = [
  "Problem solving mindset",
  "Ability to learn new technologies quickly",
  "Creative thinking",
  "Strong analytical ability",
  "Consistency and discipline",
  "Technical + creative mindset",
];

export const goals = {
  shortTerm: [
    "Get hired as a Full Stack Developer",
    "Build strong industry-level projects",
    "Gain experience in enterprise software systems",
  ],
  longTerm: [
    "Build innovative software products",
    "Start a technology company",
    "Develop software solutions for businesses and governments",
  ],
};

export const services = [
  "Full Stack Web Development",
  "Business Website Development",
  "Software System Development",
  "API Development",
  "Database Architecture",
  "UI/UX Implementation",
];

export const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "creative", label: "Creative Interests" },
  { id: "services", label: "Services" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

