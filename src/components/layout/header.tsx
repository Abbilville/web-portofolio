"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/personal";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.replace("#", ""));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={cn("fixed top-0 right-0 left-0 z-50 transition-all duration-300", scrolled ? "glass backdrop-blur-md shadow-lg" : "bg-transparent")}>
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={(e) => handleClick(e, "#home")}
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white">
                            AFZ
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-primary-500",
                                    activeSection === item.href ? "text-primary-500" : "text-foreground/80"
                                )}
                            >
                                {item.label}
                                {activeSection === item.href && (
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                                )}
                            </a>
                        ))}
                        <a
                            href="/Resume_Abbilhaidar Farras Zulfikar.pdf"
                            download
                            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            Resume
                        </a>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-9 px-0">
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="animate-slide-down border-t border-foreground/5 py-4 md:hidden">
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={cn(
                                        "rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary-500/10",
                                        activeSection === item.href ? "bg-primary-500/10 text-primary-500" : "text-foreground/80"
                                    )}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="/Resume_Abbilhaidar Farras Zulfikar.pdf"
                                download
                                className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-center text-sm font-medium text-white"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
