"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionContainer from "@/components/ui/SectionContainer";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ccb8] bg-[#fffaf1]/95 p-5 shadow-[0_28px_68px_-50px_rgba(31,26,20,0.4)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(216,204,184,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(216,204,184,0.58)_1px,transparent_1px)] [background-size:32px_32px]" />
        <AnimatedHeading
          level="h1"
          eyebrow="Projects"
          title="Built for Real-World Delivery"
          subtitle="A selected set of backend and full-stack projects with production-oriented architecture and thoughtful UX."
          gradientTitle
          className="relative z-10 max-w-3xl"
        />

        <div className="relative z-10 mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
