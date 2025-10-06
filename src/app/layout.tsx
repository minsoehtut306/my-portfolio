import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO & Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-tau-cyan-98.vercel.app/"), // Replace later with your deployed domain
  title: {
    default: "Min Soe — Portfolio",
    template: "%s · Min Soe",
  },
  description:
    "Graduate Data/Software professional in Hamilton, NZ. I build clean data pipelines & web apps.",
  openGraph: {
    type: "website",
    url: "https://my-portfolio-tau-cyan-98.vercel.app/",
    title: "Min Soe — Portfolio",
    description:
      "Graduate Data/Software professional in Hamilton, NZ. I build clean data pipelines & web apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Min Soe Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Min Soe — Portfolio",
    description:
      "Graduate Data/Software professional in Hamilton, NZ. I build clean data pipelines & web apps.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
        <Navbar />
        {children}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm opacity-80">
            © {new Date().getFullYear()} Min Soe — Built with Next.js & Tailwind CSS
          </div>
        </footer>
      </body>
    </html>
  );
}
