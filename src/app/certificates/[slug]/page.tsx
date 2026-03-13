import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
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
      <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#d8ccb8] bg-[#fffaf1] p-10 text-center shadow-[0_26px_52px_-36px_rgba(31,26,20,0.35)]">
          <p className="text-lg text-[#1f1a14]">Certificate not found.</p>
          <Link
            href="/certificates"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#665e51] transition hover:text-[#ff7a1a]"
          >
            <FiArrowLeft />
            Back to certificates
          </Link>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 text-sm text-[#665e51] transition hover:text-[#ff7a1a]"
        >
          <FiArrowLeft />
          Back to certificates
        </Link>

        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-[#d8ccb8] bg-[#fffaf1]/95 p-4 shadow-[0_28px_68px_-50px_rgba(31,26,20,0.4)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(216,204,184,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(216,204,184,0.58)_1px,transparent_1px)] [background-size:32px_32px]" />
          <h1 className="relative z-10 bg-gradient-to-r from-[#1f1a14] via-[#ff7a1a] to-[#ff4f4f] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            {cert.title}
          </h1>
          <p className="relative z-10 mt-2 text-sm text-[#665e51]">{cert.issuer}</p>

          <div className="relative z-10 mt-6 overflow-hidden rounded-3xl border border-[#d8ccb8] bg-[#fff6e7]">
            <Image
              src={cert.image}
              alt={cert.title}
              width={1600}
              height={980}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* <CopyCertificateUrl slug={cert.slug} /> */}
        </div>
      </div>
    </SectionContainer>
  );
}
