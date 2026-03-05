"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="pt-30 px-5">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl font-semibold mb-10"
        >
          About Me
        </motion.h1>

        {/* CONTENT */}
        <div className="text-gray-300 text-lg leading-8 space-y-6 text-justify">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            I’m an Information Technology student at Vidyalankar Institute of Technology with a strong interest in software engineering and building solutions that solve real-world problems. I enjoy working across the full stack, with a primary focus on backend development and system design.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I have hands-on experience with cloud technologies, especially Google Cloud Platform, and I like building scalable systems. Currently, I’m improving my problem-solving skills through Data Structures & Algorithms while also learning DevOps to understand how applications are built, deployed, and maintained efficiently.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Beyond development, I’m interested in areas like cybersecurity, blockchain, and Web3. I enjoy learning new technologies, experimenting with ideas, and continuously working towards becoming a better engineer.
          </motion.p>

        </div>

      </div>
    </section>
  );
}
