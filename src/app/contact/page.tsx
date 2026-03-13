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
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ccb8] bg-[#fffaf1]/95 p-5 shadow-[0_28px_68px_-50px_rgba(31,26,20,0.4)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(216,204,184,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(216,204,184,0.58)_1px,transparent_1px)] [background-size:32px_32px]" />
        <AnimatedHeading
          level="h1"
          eyebrow="Contact"
          title="Let's Build Something Useful"
          subtitle="Open to internships, freelance opportunities, and technical collaborations."
          gradientTitle
          className="relative z-10 max-w-3xl"
        />

        <div className="relative z-10 mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
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
                  className="block h-full rounded-3xl p-4"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#d8ccb8] bg-[#fff1e0] text-sm text-[#a65713]">
                    {iconMap[contact.label]}
                  </span>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#8a7f6e]">
                    {contact.label}
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-[#1f1a14]">
                    {contact.value}
                  </p>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="relative z-10 mt-8 bg-[#fff6e7]" hover={false}>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-[#8a7f6e]">
                Preferred channel
              </p>
              <p className="mt-2 text-base text-[#665e51]">
                Email is the fastest way to reach me for project discussions.
              </p>
            </div>
            <a
              href="mailto:rathodniraj.com@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff7a1a] via-[#ff9f1c] to-[#ff4f4f] px-5 py-3 text-sm font-semibold text-[#1f1a14] transition hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-22px_rgba(255,79,79,0.78)] sm:w-auto"
            >
              <FiSend />
              Send Email
            </a>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
