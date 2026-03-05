export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "BookAlchemy",
    description:
      "ML-powered recommendation engine for discovering books through collaborative filtering and a polished Streamlit experience.",
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "RapidFuzz",
      "Matplotlib",
    ],
    github:
      "https://github.com/Niraj1232005/book-recommendation-system-ml-knn.git",
    live: "https://bookalchemy.streamlit.app/",
    image: "/projects/book.png",
  },
  {
    title: "AeroCast",
    description:
      "Real-time weather platform with API integrations, clean architecture, Dockerized deployments, and CI/CD automation.",
    tech: ["Node.js", "Express", "EJS", "REST APIs", "Docker", "CI/CD"],
    github: "https://github.com/Niraj1232005/AeroCast.git",
    live: "https://aerocast-docker.onrender.com/",
    image: "/projects/aerocast.png",
  },
  {
    title: "Voynex",
    description:
      "AI-assisted travel planning app that generates personalized packing lists from user preferences and trip context.",
    tech: ["Next.js", "TypeScript", "Node.js", "AI"],
    github: "https://github.com/Niraj1232005/voynex",
    image: "/projects/travel.png",
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firestore", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud", "Docker", "CI/CD", "Cloud Run", "Dataflow"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Linux", "VS Code"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  image: string;
  slug: string;
};

export const certificates: Certificate[] = [
  {
    title: "Google Cloud Certification",
    issuer: "Google Cloud",
    image: "/certificates/gcp.png",
    slug: "gcp",
  },
  {
    title: "React Developer Certificate",
    issuer: "Meta / Coursera",
    image: "/certificates/aerocast.png",
    slug: "react",
  },
  {
    title: "Cloud Fundamentals",
    issuer: "Google",
    image: "/certificates/gcp.png",
    slug: "cloud",
  },
];

export const aboutParagraphs = [
  "I am an Information Technology student at Vidyalankar Institute of Technology focused on building reliable software that solves practical problems.",
  "My strongest interest is backend engineering and system design. I enjoy shaping APIs, data models, and cloud architecture that can scale cleanly.",
  "Alongside development, I keep improving with data structures, algorithms, and DevOps workflows to deliver production-ready applications end-to-end.",
];

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: "+91 93093 24120",
    href: "tel:+919309324120",
  },
  {
    label: "Email",
    value: "rathodniraj.com@gmail.com",
    href: "mailto:rathodniraj.com@gmail.com",
  },
  {
    label: "College Email",
    value: "niraj.rathod@vit.edu.in",
    href: "mailto:niraj.rathod@vit.edu.in",
  },
  {
    label: "GitHub",
    value: "github.com/Niraj1232005",
    href: "https://github.com/Niraj1232005",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/niraj14",
    href: "https://linkedin.com/in/niraj14",
  },
  {
    label: "X",
    value: "x.com/NirajRatho91596",
    href: "https://x.com/NirajRatho91596",
  },
  {
    label: "Peerlist",
    value: "peerlist.io/rathodniraj2004",
    href: "https://peerlist.io/rathodniraj2004",
  },
];
