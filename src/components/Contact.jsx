export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-100">Contact</h2>
        <p className="text-gray-300">
          I am open to backend and cloud engineering opportunities focused on scalable systems and platform
          development.
        </p>

        <address className="not-italic">
          <ul className="space-y-3 text-gray-200">
            <li>
              Email:{' '}
              <a className="text-cyan-400 hover:underline" href="mailto:developer@example.com">
                developer@example.com
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a className="text-cyan-400 hover:underline" href="https://github.com" target="_blank" rel="noreferrer">
                github.com/yourprofile
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                className="text-cyan-400 hover:underline"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
