import { Experience } from "@/types/index";

export const experiences: Experience[] = [
    {
        company: "PT Global Chemindo Megatrading",
        position: "Fullstack Developer Intern",
        location: "Jakarta, Indonesia",
        startDate: "Aug 2025",
        endDate: "Jan 2026",
        current: true,
        techStack: ["Node.js", "React", "JavaScript", "PostgreSQL", "AWS"],
        description: [
            "Developed a fullstack platform to automate purchase order (PO) processing from unstructured PDFs into structured transactions using OCR",
            "Implemented an automated order processing system for major Pharma Group clients (e.g., Kalbe), integrating document extraction and approval workflows",
            "Developed and optimized backend services using Node.js and PostgreSQL to support real-time transaction and shipment workflows",
            "Integrated AI-based document extraction tools (e.g., AWS Textract, Tesseract) for smarter PO data conversion"
        ],
        certificateUrl: "https://drive.google.com/file/d/1XKJb1bYk1bXo0u6d8F3Z2xYz9G5Q9ZlH/view?usp=sharing",
        certificateLabel: "View Certificate"
    },
    {
        company: "Videfly",
        position: "Backend Engineer Intern",
        location: "Jakarta, Indonesia",
        startDate: "Jun 2024",
        endDate: "Dec 2024",
        current: false,
        techStack: ["JavaScript", "FFmpeg", "Canvas2Video", "Kafka"],
        description: [
            "Developed a backend system to transform JSON input into templatized video advertisements, enabling users to generate videos by simply providing a product link (e.g., Tokopedia)",
            "Utilized FFmpeg and Canvas2Video for video generation, automatically incorporating desired images and AI-generated ad copy scraped from the provided links",
            "Implemented intercomponent communication and variable passing using Kafka",
            "Successfully created more than 100 JSON templates for automated video generation, significantly expanding the platform's advertising capabilities"
        ],
        certificateUrl: "https://drive.google.com/file/d/1xaOjtHQW1JSkDjqYEh9AdCdoIL6Ci2Ik/view?usp=drive_link",
        certificateLabel: "View Certificate"
    },
    {
        company: "Faculty of Computer Science, Universitas Indonesia",
        position: "Teaching Assistant",
        location: "Depok, West Java",
        startDate: "Aug 2023",
        current: true,
        description: [
            "Assisted over 100 students per semester across various courses by mentoring, evaluating, and facilitating practical understanding of theoretical topics",
            "Developed lab modules, practical assignments, and quiz/exam problems tailored to course learning objectives and student progress",
            "Led hands-on lab sessions and weekly discussions, ensuring clarity and engagement in complex topics such as digital circuits, platform-based systems, and AI fundamentals",
            "Courses assisted: Digital Systems, Programming Fundamentals 2, Computer Organization, Platform-Based Programming, Algorithm Design & Analysis, Introduction to AI & Data Science, and Calculus II"
        ],
        certificateUrl: "https://drive.google.com/file/d/1R7NKlHG1EMohBhQOX07PqPm9l1DXacTe/view?usp=drive_link",
        certificateLabel: "View Certificate"
    },
];

export const getExperiences = () => experiences;
export const getCurrentExperience = () => experiences.find((exp) => exp.current);
