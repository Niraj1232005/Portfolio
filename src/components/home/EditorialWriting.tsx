"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const sampleArticles = [
  {
    title: "Designing Resilient API Architectures for Cloud Scale",
    description:
      "Patterns for decoupling services, handling transient faults, and maintaining sub-second latency under burst workloads.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Architecture",
  },
  {
    title: "Full-Stack Typing & Data Contracts with TypeScript and Python",
    description:
      "Bridging the gap between strict frontend interfaces and flexible backend services without schema drift.",
    date: "Coming Soon",
    readTime: "4 min read",
    tag: "Engineering",
  },
  {
    title: "Zero to Production: Continuous Delivery with Docker & Cloud Run",
    description:
      "Practical CI/CD automation and container optimization strategies for modern web deployments.",
    date: "Coming Soon",
    readTime: "5 min read",
    tag: "DevOps",
  },
];

export default function EditorialWriting() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-28 sm:py-36 bg-[#09090b] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            04 // Writing &amp; Journal
          </span>
          <span className="font-mono text-xs text-zinc-600">
            [MDX ARCHITECTURE]
          </span>
        </div>

        {/* Editorial Article List */}
        <div className="divide-y divide-white/[0.06]">
          {sampleArticles.map((article, idx) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group py-8 sm:py-10 transition duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                {/* Meta Column */}
                <div className="lg:col-span-3 flex items-center gap-4 font-mono text-xs text-zinc-500">
                  <span>0{idx + 1}</span>
                  <span>/</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                      {article.title}
                    </h3>
                    <FiArrowUpRight className="text-base text-zinc-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
