import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import CopyCertificateUrl from "@/components/CopyCertificateUrl";
import SectionContainer from "@/components/ui/SectionContainer";
import { certificates } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;
  const cert = certificates.find((item) => item.slug === slug);

  if (!cert) {
    return (
      <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-md">
          <p className="text-lg text-white">Certificate not found.</p>
          <Link
            href="/certificates"
            className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-indigo-200"
          >
            <FiArrowLeft />
            Back to certificates
          </Link>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-indigo-200"
        >
          <FiArrowLeft />
          Back to certificates
        </Link>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0f1117] p-4 backdrop-blur-md sm:rounded-3xl sm:p-8">
          <h1 className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            {cert.title}
          </h1>
          <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117]">
            <Image
              src={cert.image}
              alt={cert.title}
              width={1600}
              height={980}
              className="w-full object-cover"
              priority
            />
          </div>

          <CopyCertificateUrl slug={cert.slug} />
        </div>
      </div>
    </SectionContainer>
  );
}
