"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Intro from "@/components/Intro";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }
  return (
    <section className="pt-30">
      <div className="max-w-3xl mx-auto px-5">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold">Niraj Rathod</h1>

          <p className="mt-3 text-gray-400 text-sm leading-7 max-w-xl font-semibold">
            Information Technology & Engineering student at Vidyalankar
            Institute of Technology.
            <br />
            Web Developer & Software Engineer.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="/projects" className="group">
            <h2 className="text-3xl font-semibold mb-6 group-hover:underline transition">
              Projects
            </h2>
          </Link>

          <div className="pl-4 text-sm text-gray-300 space-y-6 leading-6">
            {[
              {
                title: "BookAlchemy",
                desc: "A powerful ML-powered book recommendation system with an intuitive Streamlit interface",
                link: "https://github.com/Niraj1232005/book-recommendation-system-ml-knn.git",
              },
              {
                title: "AeroCast",
                desc: "Real-time weather app with API integration using Node.js, Express, Docker and CI/CD deployment.",
                link: "https://github.com/Niraj1232005/AeroCast.git",
              },
              {
                title: "Voynex",
                desc: "AI-powered platform suggesting personalized packing lists based on user preferences.",
                link: "https://github.com/Niraj1232005/voynex",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hover:translate-x-1 transition"
              >
                <a
                  href={p.link}
                  target="_blank"
                  className="text-white font-semibold hover:underline"
                >
                  {p.title}
                </a>

                <p className="text-gray-400 mt-1 max-w-xl">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="/skills" className="group">
            <h2 className="text-3xl font-semibold mb-6 group-hover:underline transition">
              Skills
            </h2>
          </Link>

          <div className="pl-4 text-sm text-gray-300 space-y-3 leading-7">
            <p>
              <span className="font-semibold text-white">Languages:</span> Java,
              Python, JavaScript, HTML, CSS
            </p>

            <p>
              <span className="font-semibold text-white">
                Frameworks/Libraries:
              </span>{" "}
              Python, React, Node.js, Express.js, React Query
            </p>

            <p>
              <span className="font-semibold text-white">OS:</span> Windows,
              Linux
            </p>

            <p>
              <span className="font-semibold text-white">
                Serverless Platforms:
              </span>{" "}
              AWS, GCP
            </p>

            <p>
              <span className="font-semibold text-white">Databases:</span>{" "}
              MySQL, PostgreSQL
            </p>

            <p>
              <span className="font-semibold text-white">Developer Tools:</span>{" "}
              Git, VS Code, Postman, Supabase
            </p>
          </div>
        </motion.div>

        {/* CERTIFICATES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link href="/certificates" className="group">
            <h2 className="text-3xl font-semibold mb-6 group-hover:underline transition">
              Certificates
            </h2>
          </Link>

          <div className="pl-4 text-sm text-gray-300 space-y-6 leading-6">
            <div className="hover:translate-x-1 transition">
              <Link
                href="/certificates/gcp"
                className="text-white font-semibold hover:underline"
              >
                Google Cloud Certification
              </Link>

              <p className="text-gray-400 mt-1 max-w-xl">
                Focused on cloud fundamentals, GCP services, and scalable
                systems.
              </p>
            </div>

            <div className="hover:translate-x-1 transition">
              <Link
                href="/certificates/react"
                className="text-white font-semibold hover:underline"
              >
                React Developer Certificate
              </Link>

              <p className="text-gray-400 mt-1 max-w-xl">
                Covers modern React, hooks, and dynamic UI development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 mb-20"
        >
          <Link href="/contact" className="group">
            <h2 className="text-3xl font-semibold mb-6 group-hover:underline transition">
              Contact
            </h2>
          </Link>

          <div className="pl-4 text-sm text-gray-300 space-y-3 leading-7">
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href="tel:+919309324120" className="hover:underline">
                +91 93093 24120
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:rathodniraj.com@gmail.com"
                className="hover:underline"
              >
                rathodniraj.com@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">GitHub:</span>{" "}
              <a
                href="https://github.com/Niraj1232005"
                target="_blank"
                className="hover:underline"
              >
                github.com/Niraj1232005
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
