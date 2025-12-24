/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5">
                <div className="h-5 w-5 animate-pulse rounded-full bg-foreground/20" />
            </div>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Toggle theme"
        >
            <div className="relative h-5 w-5">
                <Sun
                    className={`absolute inset-0 h-5 w-5 text-amber-500 transition-all duration-500 ${
                        isDark
                            ? "scale-0 rotate-90 opacity-0"
                            : "scale-100 rotate-0 opacity-100"
                    }`}
                />
                <Moon
                    className={`absolute inset-0 h-5 w-5 text-indigo-400 transition-all duration-500 ${
                        isDark
                            ? "scale-100 rotate-0 opacity-100"
                            : "scale-0 -rotate-90 opacity-0"
                    }`}
                />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
