export default function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.08),transparent_42%),radial-gradient(circle_at_80%_8%,rgba(139,92,246,0.07),transparent_38%),linear-gradient(180deg,#0a0a0f_0%,#0a0a0f_50%,#0b0d13_100%)]" />
      <div className="absolute -left-24 top-16 hidden h-64 w-64 rounded-full bg-indigo-500/10 blur-[100px] animate-float-slow sm:block" />
      <div className="absolute -right-16 top-1/3 hidden h-56 w-56 rounded-full bg-violet-500/10 blur-[100px] animate-float-medium sm:block" />
      <div className="absolute bottom-4 left-1/2 hidden h-56 w-56 -translate-x-1/2 rounded-full bg-slate-400/8 blur-[110px] animate-float-fast sm:block" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(148,163,184,0.28)_0.75px,transparent_0.75px)] [background-size:34px_34px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
    </div>
  );
}
