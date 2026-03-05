import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}
