import { SiGithub, SiLinkedin, SiInstagram, SiMedium, SiGmail } from "react-icons/si";
import { personalInfo, socialLinks } from "@/data/personal";

const iconMap: Record<string, typeof SiGithub> = {
    Github: SiGithub,
    Linkedin: SiLinkedin,
    Mail: SiGmail,
    Medium: SiMedium,
    Instagram: SiInstagram,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/10 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <h3 className="gradient-text mb-2 text-lg font-bold">Abbilhaidar FZ</h3>
                        <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{personalInfo.location}</p>
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
