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
    <div className="mt-6 flex flex-col items-center gap-3">
      <p className="text-sm text-gray-400">
        Use this URL when adding the certificate on LinkedIn:
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
      >
        {copied ? "Copied!" : "Copy certificate URL"}
      </button>
    </div>
  );
}
