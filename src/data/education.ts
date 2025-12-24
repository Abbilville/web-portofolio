import { Education } from "@/types/index";

export const education: Education[] = [
    {
        institution: "Universitas Indonesia",
        degree: "Bachelor of Computer Science",
        location: "Depok, Indonesia",
        startDate: "Aug 2022",
        endDate: "Jun 2026 (Expected)",
        gpa: "3.94/4.00",
        transcriptUrl: "https://drive.google.com/file/d/1ly1oSE0t4lv7ldsLktXyGczWS97OW87W/view?usp=sharing",
        current: true,
        coursework: [
            "Introduction to AI & Data Science",
            "Algorithms and Data Structures",
            "Database",
            "Platform-Based Programming",
            "Machine & Reinforcement Learning",
            "Information Retrieval",
            "Deep Learning"
        ],
    },
    {
        institution: "SMAN 21 Jakarta",
        degree: "Major in Mathematics and Natural Science",
        location: "Jakarta, Indonesia",
        startDate: "Jul 2019",
        endDate: "Jul 2022",
        gpa: "",
        current: false,
        coursework: [],
    },
];

export const getEducation = () => education;
