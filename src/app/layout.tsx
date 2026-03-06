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
  description:
    "Backend-focused developer building scalable systems using cloud and modern technologies.",
  icons: {
    icon: "/N.svg",
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
        <GlowBackground />
        <Navbar />
        <main className="relative z-10 pb-24 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
