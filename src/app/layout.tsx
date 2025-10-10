// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Min Soe Htut Portfolio",
  description: "Data & Software Professional Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`} suppressHydrationWarning>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
    <script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
        {children}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-sm opacity-80 text-center">
            © {new Date().getFullYear()} Min Soe Htut — Built with Next.js & Tailwind CSS
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

