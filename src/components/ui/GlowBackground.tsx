export default function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.12),transparent_45%),radial-gradient(circle_at_85%_20%,_rgba(167,139,250,0.1),transparent_38%),radial-gradient(circle_at_50%_95%,_rgba(148,163,184,0.12),transparent_42%)]" />
      <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-indigo-400/16 blur-[120px] animate-float-slow" />
      <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-violet-400/14 blur-[120px] animate-float-medium" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-300/12 blur-[120px] animate-float-fast" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
    </div>
  );
}
