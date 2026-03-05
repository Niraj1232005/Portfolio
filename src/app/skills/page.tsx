"use client";
// export declare const : IconType;
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaWindows,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { BiGitBranch } from "react-icons/bi";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Authentication", icon: <MdSecurity /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firestore", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Cloud Run", icon: <CiCloud /> },
      { name: "Pub/Sub", icon: <CiCloud /> },
      { name: "Dataflow", icon: <CiCloud /> },
      { name: "CI/CD", icon: <BiGitBranch /> },
    ],
  },
  {
    title: "OS & Tools",
    skills: [
      { name: "Windows", icon: <FaWindows /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="pt-30 px-5 pb-5">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <h1 className="text-4xl font-semibold mb-12">
            Skills
          </h1>
        </Reveal>

        {/* GRID */}
        <div className="space-y-10">

          {skillCategories.map((category, index) => (
            <Reveal key={index}>
              <div>

                {/* CATEGORY TITLE */}
                <h2 className="text-lg font-semibold text-gray-300 mb-4">
                  {category.title}
                </h2>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm border border-white/10 rounded-md text-gray-300 hover:border-white/30 hover:bg-white/5 transition"
                    >
                      {skill.icon && (
                        <span className="text-base">{skill.icon}</span>
                      )}
                      {skill.name}
                    </motion.div>
                  ))}

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
