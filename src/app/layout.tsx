import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Min Soe Htut Portfolio",
    description: "Networking, IT Support, and Technical Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.className} scroll-smooth`}
            suppressHydrationWarning
        >
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                    precedence="default"
                />
            </head>
            <body className="bg-white text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-100">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}