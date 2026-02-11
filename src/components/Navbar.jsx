const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-gray-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-400">
          Developer Portfolio
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 transition-colors duration-200 hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors duration-200 hover:bg-cyan-400 hover:text-gray-950"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
