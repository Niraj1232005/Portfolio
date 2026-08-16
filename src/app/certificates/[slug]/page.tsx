import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { certificates } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;
  const cert = certificates.find((item) => item.slug === slug);

  if (!cert) {
    return (
      <div className="min-h-screen px-6 sm:px-12 lg:px-20 pt-36 pb-24 max-w-4xl mx-auto text-center space-y-6">
        <p className="text-xl font-light text-zinc-600 dark:text-zinc-400">
          Certificate not found.
        </p>
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 font-mono text-xs text-black dark:text-white hover:underline"
        >
          <FiArrowLeft />
          <span>Back to certificates</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-20 pt-32 sm:pt-40 pb-24 max-w-5xl mx-auto">
      {/* Back Navigation Link */}
      <Link
        href="/certificates"
        className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-black dark:hover:text-white transition mb-12"
      >
        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        <span>Back to all certificates</span>
      </Link>

      {/* Header Info */}
      <div className="border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-8 space-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          Credential Verification
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
          {cert.title}
        </h1>
        <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          Issuer: {cert.issuer}
        </p>
      </div>

      {/* Certificate Image Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c0e] p-3 sm:p-4 shadow-sm dark:shadow-none">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
