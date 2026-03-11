import "./globals.css";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/ui/GlowBackground";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

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
  title: "Niraj Rathod",
  description: "Portfolio website",
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[#0a0a0f] text-slate-300 antialiased`}
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
        <main className="relative z-10 pb-24 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
