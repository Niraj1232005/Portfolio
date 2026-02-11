export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold leading-tight text-gray-100 sm:text-5xl lg:text-6xl">
          Full Stack Developer | Backend-Focused | Cloud Systems
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl">
          Building scalable cloud-native applications and intelligent backend systems.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-md bg-cyan-400 px-6 py-3 font-medium text-gray-950 transition-transform duration-200 hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-gray-700 px-6 py-3 font-medium text-gray-100 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
