"use client";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionContainer from "@/components/ui/SectionContainer";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <SectionContainer className="pb-20 pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="Projects"
        title="Built for Real-World Delivery"
        subtitle="A selected set of backend and full-stack projects with production-oriented architecture and thoughtful UX."
        gradientTitle
        className="max-w-3xl"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
