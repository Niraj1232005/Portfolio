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
    <SectionContainer className="pb-14 pt-24 sm:pb-20 sm:pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="Contact"
        title="Let's Build Something Useful"
        subtitle="Open to internships, freelance opportunities, and technical collaborations."
        gradientTitle
        className="max-w-3xl"
      />

      <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
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
                className="block h-full rounded-2xl p-4"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200/25 bg-indigo-300/14 text-sm text-slate-100">
                  {iconMap[contact.label]}
                </span>

                <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-slate-300/80">
                  {contact.label}
                </p>

                <p className="mt-1 break-all text-sm font-medium text-slate-100">
                  {contact.value}
                </p>
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="mt-8" hover={false}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-slate-300/80">
              Preferred channel
            </p>
            <p className="mt-2 text-base text-slate-200">
              Email is the fastest way to reach me for project discussions.
            </p>
          </div>
          <a
            href="mailto:rathodniraj.com@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-200/35 bg-gradient-to-r from-indigo-400/28 via-violet-400/22 to-slate-300/18 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:from-indigo-400/38 hover:to-slate-300/28 sm:w-auto"
          >
            <FiSend />
            Send Email
          </a>
        </div>
      </Card>
    </SectionContainer>
  );
}
