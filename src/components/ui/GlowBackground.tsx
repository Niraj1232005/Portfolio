export default function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.025),transparent_70%)]" />

      {/* Very faint technical grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.025] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:4rem_4rem]" />

      {/* Faint fine grain */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
