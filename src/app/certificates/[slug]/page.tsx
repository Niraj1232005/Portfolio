import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

const certData: any = {
  gcp: {
    title: "Google Cloud Certification",
    issuer: "Google Cloud",
    image: "/certificates/gcp.png",
  },
  react: {
    title: "React Developer Certificate",
    issuer: "Meta",
    image: "/certificates/aerocast.png",
  },
  cloud: {
    title: "Cloud Fundamentals",
    issuer: "Google",
    image: "/certificates/cloud.png",
  },
};

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;   

  const cert = certData[slug];

  console.log("slug:", slug); 

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Certificate not found
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 px-5">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-semibold mb-2">
          {cert.title}
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          {cert.issuer}
        </p>

        <Image
          src={cert.image}
          alt={cert.title}
          width={1400}
          height={900}
          className="w-full rounded-lg border border-white/10"
          priority
        />

      </div>
    </section>
  );
}
