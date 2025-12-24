import { OrganizationExperience } from "@/types/index";

export const organizationExperiences: OrganizationExperience[] = [
    {
        organization: "BEM Fasilkom UI",
        position: "Vice President, Student's Career and Scholarly Development",
        startDate: "Feb 2024",
        endDate: "Dec 2024",
        current: false,
        description: [
            "Managed the Road to Champion program, collecting monthly student achievement data, publishing on BEM Fasilkom UI's Instagram, and distributing financial appreciation",
            "Coordinated the Road to OIM program, recruiting and preparing Fasilkom UI student candidates for the 2024 UI Student Scientific Olympiad (OIM UI)",
            "Contributed to the development of a web-based platform idea for the Ajar.in program to facilitate mentor booking and payments, coordinating with the Business Bureau for technical implementation"
        ],
    },
    {
        organization: "BEM Fasilkom UI",
        position: "Staff, Student's Career and Scholarly Development",
        startDate: "Apr 2023",
        endDate: "Dec 2024",
        current: false,
        description: [
            "Created educational content for BEM Fasilkom UI's Instagram (e.g., on MBKM) and disseminated internship information to class groups",
            "Supported student preparation for English Proficiency Tests (EPT) through collaboration with language institutions"
        ],
    },
];

export const getOrganizationExperiences = () => organizationExperiences;
