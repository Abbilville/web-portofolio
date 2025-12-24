export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    features?: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    category?: "web" | "mobile" | "fullstack" | "ml" | "design" | "other";
    period?: string;
    teamSize?: string;
}

export interface Skill {
    name: string;
    icon?: string;
    category: "backend" | "frontend" | "database" | "tools" | "cloud" | "ml" | "design" | "other";
    level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Experience {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string[];
    techStack?: string[];
    current?: boolean;
    certificateUrl?: string;
}

export interface Education {
    institution: string;
    degree: string;
    field?: string;
    location?: string;
    startDate: string;
    endDate?: string;
    gpa?: string;
    transcriptUrl?: string;
    coursework?: string[];
    current?: boolean;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon?: string;
}

export interface PersonalInfo {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
}

export interface OrganizationExperience {
    organization: string;
    position: string;
    startDate: string;
    endDate?: string;
    description: string[];
    current?: boolean;
}
