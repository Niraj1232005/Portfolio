const skillCategories = {
  Backend: ['Node.js', 'Express', 'REST APIs', 'Microservices', 'Event-Driven Systems'],
  'Cloud & DevOps': ['GCP', 'Docker', 'Cloud Run', 'Pub/Sub', 'CI/CD'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'Core CS': ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks']
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <h2 className="text-3xl font-semibold text-gray-100">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <article key={category} className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="mb-4 text-xl font-semibold text-cyan-400">{category}</h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
