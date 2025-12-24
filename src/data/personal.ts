import { PersonalInfo, SocialLink } from "@/types/index";

export const personalInfo: PersonalInfo = {
    name: "Abbilhaidar Farras Zulfikar",
    role: "Backend Software Engineer",
    tagline: "Building scalable systems and exploring machine learning",
    location: "Jakarta, Indonesia",
    email: "abbilville@gmail.com",
    phone: "(+62) 82110884760",
    summary: "A passionate Computer Science student who enjoys building useful software and learning new technologies. Experienced in backend development, machine learning, and search systems. Interested in solving real-world problems and working on meaningful projects in software engineering and data science."
};

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/Abbilville",
        icon: "Github"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abbilville",
        icon: "Linkedin"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/abbilville",
        icon: "Instagram"
    },
    {
        name: "Medium",
        url: "https://medium.com/@Abbilville",
        icon: "BookOpen"
    },
    {
        name: "Email",
        url: "mailto:abbilville@gmail.com",
        icon: "Mail"
    }
];

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
