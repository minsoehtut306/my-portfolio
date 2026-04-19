"use client";

import { useEffect } from "react";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "light" || storedTheme === "dark") {
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applySystemTheme = () => {
            document.documentElement.classList.toggle("dark", mediaQuery.matches);
        };

        applySystemTheme();

        const handleChange = () => {
            if (!localStorage.getItem("theme")) {
                applySystemTheme();
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return <>{children}</>;
}