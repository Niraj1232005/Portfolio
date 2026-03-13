"use client";

import { useState } from "react";

export default function CopyCertificateUrl({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/certificates/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-[#d8ccb8] bg-[#fffaf1] px-6 py-5 text-center shadow-[0_16px_36px_-28px_rgba(31,26,20,0.28)]">
      <p className="text-sm text-[#665e51]">
        Use this URL when adding the certificate on LinkedIn:
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-xl bg-gradient-to-r from-[#ff7a1a] via-[#ff9f1c] to-[#ff4f4f] px-4 py-2 text-sm font-medium text-[#1f1a14] transition hover:scale-[1.02] hover:shadow-[0_16px_30px_-20px_rgba(255,79,79,0.62)]"
      >
        {copied ? "Copied!" : "Copy certificate URL"}
      </button>
    </div>
  );
}

