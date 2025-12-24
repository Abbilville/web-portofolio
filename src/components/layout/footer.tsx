import { Github, Linkedin, Mail, BookOpen, Instagram } from "lucide-react";
import { personalInfo, socialLinks, navItems } from "@/data/personal";

const iconMap: Record<string, typeof Github> = {
    Github,
    Linkedin,
    Mail,
    BookOpen,
    Instagram,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/10 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <h3 className="gradient-text mb-2 text-lg font-bold">Abbilhaidar</h3>
                        <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{personalInfo.location}</p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                        <h4 className="mb-4 text-sm font-semibold">Connect</h4>
                        <div className="flex gap-3 justify-center sm:justify-start">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon || "Github"];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-all hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-foreground/10 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Made with <span className="text-red-500">❤️</span> by {personalInfo.name} © {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
}
