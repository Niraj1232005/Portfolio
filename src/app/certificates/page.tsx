"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Certificate = {
  title: string;
  issuer: string;
  image: string;
  slug: string;
};

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Google Cloud Certification",
      issuer: "Google Cloud",
      image: "/certificates/gcp.png",
      slug: "gcp",
    },
    {
      title: "React Developer Certificate",
      issuer: "Meta / Coursera",
      image: "/certificates/aerocast.png",
      slug: "react",
    },
    {
      title: "Cloud Fundamentals",
      issuer: "Google",
      image: "/certificates/cloud.png",
      slug: "cloud",
    },
  ];

  return (
    <section className="pt-40 px-5">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-10">
          Certificates
        </h1>

        {/* LIST */}
        <div className="space-y-10">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="flex gap-6 items-start"
            >
              {/* IMAGE */}
              <div className="w-40 shrink-0">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              {/* TEXT */}
              <div>
                <Link
                  href={`/certificates/${cert.slug}`}
                  className="text-white font-semibold hover:underline"
                >
                  {cert.title}
                </Link>

                <p className="text-gray-400 text-sm mt-1">
                  {cert.issuer}
                </p>

                {/* <p className="text-gray-500 text-sm mt-2">
                  Click to view certificate page (use for LinkedIn).
                </p> */}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
