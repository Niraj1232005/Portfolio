"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  live?: string;
  image?: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("GitHub API Error:", data);
          setRepos([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setRepos([]);
        setLoading(false);
      });
  }, []);

  const projects: Project[] = [
    {
      title: "BookAlchemy",
      description:
        "A powerful ML-powered book recommendation system with an intuitive Streamlit interface",
      tech: ["Python", "Streamlit", "Pandas", "Numpy","Scikit-learn","RapidFuz","Matplotlib"],
      github: "https://github.com/Niraj1232005/book-recommendation-system-ml-knn.git",
      live: "https://bookalchemy.streamlit.app/",
      image: "/projects/book.png",
    },
    {
      title: "AeroCast",
      description:
        "Real-time weather app with API integration and responsive UI.",
      tech: ["Node.js","Express", "EJS", "REST APIs", "Docker", "CI/CD" ],
      github: "https://github.com/Niraj1232005/AeroCast.git",
      live: "https://aerocast-docker.onrender.com/",
      image: "/projects/aerocast.png",
    },
    {
      title: "Voynex",
      description: "AI-powered platform suggesting personalized packing lists.",
      tech: ["Next.js", "AI", "Node.js"],
      github: "https://github.com/Niraj1232005/voynex",
      image: "/projects/travel.png",
    },
  ];

  return (
    <section className="pt-30 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h1 className="text-4xl font-semibold mb-10 text-center">Projects</h1>
        </Reveal>

        {/* MANUAL PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* GITHUB PROJECTS */}
        {/* <Reveal>
          <h2 className="text-2xl font-semibold mb-6">More on GitHub</h2>
        </Reveal>

        {loading ? (
          <p className="text-gray-400">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(repos) &&
              repos
                .filter((repo) => !repo.fork) 
                .slice(0, 6)
                .map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#111] p-5 rounded-xl border border-white/10"
                  >
                    <h3 className="font-semibold">{repo.name}</h3>

                    <p className="text-gray-400 text-sm mt-2">
                      {repo.description || "No description"}
                    </p>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="text-sm mt-4 inline-block hover:underline"
                    >
                      View Repo →
                    </a>
                  </motion.div>
                ))}
          </div>
        )} */}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/30 transition"
    >
      {/* IMAGE */}
      {project.image && (
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={200}
            className="w-full h-40 object-contain bg-[#0d0d0d] transition duration-300 hover:scale-105"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold">{project.title}</h2>

      <p className="text-gray-400 mt-3 text-sm">{project.description}</p>

      {/* TECH */}
      {project.tech && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* LINKS */}
      <div className="flex gap-4 mt-6 text-sm">
        {project.github && (
          <a href={project.github} target="_blank" className="hover:underline">
            GitHub →
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" className="hover:underline">
            Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}
