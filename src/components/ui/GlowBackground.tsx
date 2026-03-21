export default function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(255,122,26,0.16),transparent_32%),radial-gradient(circle_at_84%_8%,rgba(255,79,79,0.13),transparent_36%),radial-gradient(circle_at_70%_82%,rgba(154,209,34,0.14),transparent_34%)]" />
      <div className="absolute -left-16 top-20 hidden h-52 w-52 rounded-full bg-[#ff7a1a]/20 blur-[80px] animate-float-slow sm:block" />
      <div className="absolute right-6 top-28 hidden h-44 w-44 rotate-12 rounded-[2rem] border border-[#d8ccb8]/70 bg-[#fff4dc]/80 shadow-[0_24px_60px_-40px_rgba(31,26,20,0.45)] animate-drift-spin lg:block" />
      <div className="absolute right-16 top-1/2 hidden h-20 w-20 rounded-full border-2 border-dashed border-[#ff4f4f]/55 bg-[#ffd8d8]/45 animate-float-medium md:block" />
      <div className="absolute bottom-16 left-[18%] hidden h-28 w-28 rounded-2xl border border-[#d8ccb8] bg-[#ecfccb]/70 shadow-[0_18px_44px_-30px_rgba(31,26,20,0.35)] animate-sway-tilt sm:block" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(102,94,81,0.22)_0.75px,transparent_0.75px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
    </div>
  );
}

