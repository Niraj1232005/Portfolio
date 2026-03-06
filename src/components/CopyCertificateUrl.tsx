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
    <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-md">
      <p className="text-sm text-slate-300">
        Use this URL when adding the certificate on LinkedIn:
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:from-indigo-400 hover:to-violet-400"
      >
        {copied ? "Copied!" : "Copy certificate URL"}
      </button>
    </div>
  );
}
