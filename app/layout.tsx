import Footer from "@/components/common/footer";
import Navbar from "@/components/common/Navbar";
import SplashScreen from "@/components/SplashScreen";
import ThemeProvider from "@/providers/theme-provider";
import type {Metadata} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Gupta - Full Stack Engineer",
  description: "Full stack engineer looking for work. I ship reliable backends, clean product UIs, and scalable systems — solo or with a team.",
  icons: {
    icon: "/images/profile/newimage.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:selection:bg-neutral-800 dark:selection:text-neutral-50 selection:bg-neutral-300 selection:text-neutral-900 antialiased w-screen overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SplashScreen>
            <Navbar />
            {children}
            <Footer />
          </SplashScreen>

        </ThemeProvider>

      </body>
    </html>
  );
}
