import "./globals.css";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/ui/GlowBackground";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Niraj Rathod — Portfolio",
  description:
    "Portfolio of Niraj Rathod, an Information Technology student building scalable backend systems, cloud-native applications, and modern web experiences.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "GmbKQgqP05H2pvqV9d5B9tTKj0tuyTm1cYV5Kv0P40I",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[#fafafa] dark:bg-[#050505] text-[#0a0a0a] dark:text-[#f2f2f2] antialiased transition-colors duration-300`}
      >
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Niraj Rathod",
              url: "https://niraj-rathod.vercel.app",
              sameAs: [
                "https://github.com/Niraj1232005",
                "https://linkedin.com/in/niraj14",
              ],
            }),
          }}
        />
        <GlowBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
