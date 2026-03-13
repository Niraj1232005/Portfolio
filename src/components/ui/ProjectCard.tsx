"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Card from "@/components/ui/Card";
import SkillBadge from "@/components/ui/SkillBadge";
import { fadeInUp } from "@/components/ui/motion";
import type { Project } from "@/data/content";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="h-full">
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)]">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={380}
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1a14]/35 via-transparent to-transparent" />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/80">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <SkillBadge key={`${project.title}-${tech}`} label={tech} className="py-1.5" />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 pt-2 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--foreground)]/80 transition hover:text-[#ff7a1a]"
            >
              <FiGithub className="text-base" />
              <span>GitHub</span>
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--foreground)]/80 transition hover:text-[#ff4f4f]"
              >
                <FiExternalLink className="text-base" />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

