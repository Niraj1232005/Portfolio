"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Intro from "@/components/Intro";
import EditorialCanvas from "@/components/home/EditorialCanvas";
import EditorialHero from "@/components/home/EditorialHero";
import EditorialProjects from "@/components/home/EditorialProjects";
import EditorialStack from "@/components/home/EditorialStack";
import EditorialCertificates from "@/components/home/EditorialCertificates";
import EditorialContact from "@/components/home/EditorialContact";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldShowIntro = searchParams.get("intro") === "1";
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  useEffect(() => {
    setShowIntro(shouldShowIntro);
  }, [shouldShowIntro]);

  if (showIntro) {
    return (
      <Intro
        onFinish={() => {
          setShowIntro(false);
          if (shouldShowIntro) {
            router.replace("/", { scroll: false });
          }
        }}
      />
    );
  }

  return (
    <EditorialCanvas>
      <main className="w-full overflow-x-hidden">
        {/* 01 — HERO (Viewport-fitted, large typography, concise description, primary actions) */}
        <EditorialHero />

        {/* 02 — SELECTED WORKS (Exactly 3 featured projects, interactive selector, visual preview) */}
        <EditorialProjects />

        {/* 03 — TECH STACK (Compact editorial matrix with subtle tech-specific accent colors) */}
        <EditorialStack />

        {/* 04 — CERTIFICATES (Exactly 2 featured certificates with minimal timeline and View all link) */}
        <EditorialCertificates />

        {/* 05 — CONTACT (Strong editorial closing section and channels) */}
        <EditorialContact />
      </main>
    </EditorialCanvas>
  );
}
