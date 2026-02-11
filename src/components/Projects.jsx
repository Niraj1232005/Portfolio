const projects = [
  {
    title: 'Cloud Event-Driven File Processing System',
    description:
      'Designed a backend workflow that ingests files at scale and processes them asynchronously using cloud-native messaging. Focused on reliability, observability, and fault-tolerant execution.',
    stack: ['GCP', 'Cloud Run', 'Pub/Sub', 'Cloud Storage'],
    github: 'https://github.com/',
    demo: ''
  },
  {
    title: 'AI Travel Platform',
    description:
      'Built a full-stack platform that delivers personalized travel suggestions with recommendation logic. Integrated backend APIs and data pipelines to provide context-aware user experiences.',
    stack: ['React', 'Node.js', 'Recommendation Engine', 'REST APIs'],
    github: 'https://github.com/',
    demo: 'https://example.com'
  },
  {
    title: 'Real-Time Stock Market Data Pipeline',
    description:
      'Implemented a streaming architecture for ingesting and transforming real-time market feeds. Optimized throughput with event-driven processing and scalable analytics primitives.',
    stack: ['Pub/Sub', 'Dataflow', 'Streaming', 'Cloud Monitoring'],
    github: 'https://github.com/',
    demo: ''
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <h2 className="text-3xl font-semibold text-gray-100">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-xl border border-gray-800 bg-gray-900/40 p-6 transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors duration-200 hover:bg-cyan-400 hover:text-gray-950"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
