"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp } from "@/components/ui/motion";
import { contactMethods } from "@/data/content";

const iconMap: Record<string, ReactNode> = {
  Phone: <FiPhone />,
  Email: <FiMail />,
  "College Email": <FiUser />,
  GitHub: <FiGithub />,
  LinkedIn: <FiLinkedin />,
  X: <RiTwitterXLine />,
  Peerlist: <BsGlobe2 />,
};

export default function Contact() {
  return (
    <SectionContainer className="pb-20 pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="Contact"
        title="Let’s Build Something Useful"
        subtitle="Open to internships, freelance opportunities, and technical collaborations."
        gradientTitle
        className="max-w-3xl"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {contactMethods.map((contact, index) => (
          <motion.div
            key={contact.label}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full p-0">
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="block h-full rounded-2xl p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-300/30 bg-indigo-500/20 text-indigo-100">
                  {iconMap[contact.label]}
                </span>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-indigo-100/70">
                  {contact.label}
                </p>
                <p className="mt-2 break-all text-base font-medium text-slate-100">
                  {contact.value}
                </p>
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mt-8" hover={false}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-indigo-100/70">
              Preferred channel
            </p>
            <p className="mt-2 text-base text-slate-200">
              Email is the fastest way to reach me for project discussions.
            </p>
          </div>
          <a
            href="mailto:rathodniraj.com@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-blue-500/30 px-5 py-2.5 text-sm font-medium text-indigo-100 transition hover:from-indigo-500/45 hover:to-blue-500/45"
          >
            <FiSend />
            Send Email
          </a>
        </div>
      </Card>
    </SectionContainer>
  );
}
