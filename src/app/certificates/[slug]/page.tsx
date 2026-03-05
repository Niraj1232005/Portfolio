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
      <SectionContainer className="pb-14 pt-24 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
          <p className="text-lg text-slate-200">Certificate not found.</p>
          <Link
            href="/certificates"
            className="mt-6 inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-violet-100"
          >
            <FiArrowLeft />
            Back to certificates
          </Link>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="pb-14 pt-24 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-violet-100"
        >
          <FiArrowLeft />
          Back to certificates
        </Link>

        <div className="mt-6 rounded-2xl border border-white/12 bg-slate-900/55 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-8">
          <h1 className="bg-gradient-to-r from-slate-100 via-indigo-200 to-violet-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            {cert.title}
          </h1>
          <p className="mt-2 text-sm text-slate-300/85">{cert.issuer}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/12 bg-slate-900/50">
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
