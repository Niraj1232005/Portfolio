"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-30 px-5">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-8">
          Contact
        </h1>

        <p className="text-gray-400 mb-10 text-sm">
          Feel free to reach out for opportunities or collaboration.
        </p>

        {/* CONTACT INFO */}
        <div className="pl-4 text-sm text-gray-300 space-y-4 leading-6">

          <p>
            <span className="font-semibold text-white">Phone:</span>{" "}
            <a href="tel:+919309324120" className="hover:underline">
              +91 93093 24120
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:rathodniraj.com@gmail.com" className="hover:underline">
              rathodniraj.com@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">College Email:</span>{" "}
            <span className="text-gray-400">
              niraj.rathod@vit.edu.in
            </span>
          </p>

        </div>

        {/* SOCIALS */}
<div className="pl-4 mt-10 text-sm text-gray-300 space-y-3 leading-6">

  <p className="flex items-center gap-3">
    <FaGithub />
    <a
      href="https://github.com/Niraj1232005"
      target="_blank"
      className="hover:underline"
    >
      GitHub
    </a>
  </p>

  <p className="flex items-center gap-3">
    <FaLinkedin />
    <a
      href="https://linkedin.com/in/niraj14"
      target="_blank"
      className="hover:underline"
    >
      LinkedIn
    </a>
  </p>

  <p className="flex items-center gap-3">
    <FaTwitter />
    <a
      href="https://x.com/NirajRatho91596"
      target="_blank"
      className="hover:underline"
    >
      X (Twitter)
    </a>
  </p>

  <p className="flex items-center gap-3">
    🌐
    <a
      href="https://peerlist.io/rathodniraj2004"
      target="_blank"
      className="hover:underline"
    >
      Peerlist
    </a>
  </p>

</div>


      </div>
    </section>
  );
}
