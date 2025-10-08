import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WalkingRobot from "@/components/WalkingRobot";
import ThemeToggle from "@/components/ThemeToggle";
import CursorTrail from "@/components/CursorTrail";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Mehak Saini - UX/UI & Web Designer",
  description: "Portfolio of Mehak Saini - UX/UI and Web Designer specializing in user-centered, intuitive, and visually appealing websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <CursorTrail />
        <LoadingScreen />
        <Navigation />
        <ThemeToggle />
        <WalkingRobot />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
