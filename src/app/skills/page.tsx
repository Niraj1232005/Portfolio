"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGooglecloud,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import SkillBadge from "@/components/ui/SkillBadge";
import { fadeInUp } from "@/components/ui/motion";
import { skillCategories } from "@/data/content";

const skillIcons: Record<string, ReactNode> = {
  Java: <FaJava />,
  Python: <FaPython />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Framer Motion": <SiFramer />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  "REST APIs": <TbApi />,
  Authentication: <MdSecurity />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Firestore: <SiFirebase />,
  Supabase: <SiSupabase />,
  "Google Cloud": <SiGooglecloud />,
  Docker: <FaDocker />,
  "CI/CD": <BiGitBranch />,
  "Cloud Run": <SiGooglecloud />,
  Dataflow: <SiGooglecloud />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Postman: <SiPostman />,
  Linux: <FaLinux />,
  "VS Code": <FaCode />,
};

export default function Skills() {
  return (
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)]/95 p-5 shadow-[0_28px_68px_-50px_rgba(31,26,20,0.4)] sm:p-8 dark:shadow-none">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:32px_32px]" />
        <AnimatedHeading
          level="h1"
          eyebrow="Skills"
          title="Tools and Technologies"
          subtitle="Core stack across full-stack development, cloud platforms, and deployment pipelines."
          gradientTitle
          className="relative z-10 max-w-3xl"
        />

        <div className="relative z-10 mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="h-full">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]/60">
                  {category.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={`${category.title}-${skill}`}
                      label={skill}
                      icon={skillIcons[skill]}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

