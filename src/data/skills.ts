import { Skill } from "@/types/index";

export const skills: Skill[] = [
    // Backend
    {
        name: "JavaScript",
        category: "backend",
        level: "expert",
    },
    {
        name: "Java",
        category: "backend",
        level: "expert",
    },
    {
        name: "Python",
        category: "backend",
        level: "expert",
    },
    {
        name: "Spring Boot",
        category: "backend",
        level: "advanced",
    },
    {
        name: "Django",
        category: "backend",
        level: "advanced",
    },
    {
        name: "Node.js",
        category: "backend",
        level: "intermediate",
    },
    {
        name: "RESTful API",
        category: "backend",
        level: "advanced",
    },

    // Frontend
    {
        name: "React.js",
        category: "frontend",
        level: "advanced",
    },
    {
        name: "TypeScript",
        category: "frontend",
        level: "advanced",
    },
    {
        name: "JavaScript",
        category: "frontend",
        level: "advanced",
    },
    {
        name: "Vue.js",
        category: "frontend",
        level: "intermediate",
    },
    {
        name: "Tailwind CSS",
        category: "frontend",
        level: "advanced",
    },

    // Database
    {
        name: "PostgreSQL",
        category: "database",
        level: "advanced",
    },
    {
        name: "MongoDB",
        category: "database",
        level: "advanced",
    },
    {
        name: "SQL",
        category: "database",
        level: "advanced",
    },

    // ML & AI
    {
        name: "PyTorch",
        category: "ml",
        level: "advanced",
    },
    {
        name: "Scikit-learn",
        category: "ml",
        level: "advanced",
    },
    {
        name: "HuggingFace Transformers",
        category: "ml",
        level: "intermediate",
    },
    {
        name: "Pandas & NumPy",
        category: "ml",
        level: "advanced",
    },
    {
        name: "Machine Learning",
        category: "ml",
        level: "advanced",
    },
    {
        name: "NLP",
        category: "ml",
        level: "intermediate",
    },

    // Cloud & DevOps
    {
        name: "Amazon Web Services (AWS)",
        category: "cloud",
        level: "intermediate",
    },
    {
        name: "Google Cloud Platform (GCP)",
        category: "cloud",
        level: "intermediate",
    },
    {
        name: "Firebase",
        category: "cloud",
        level: "intermediate",
    },
    {
        name: "Docker",
        category: "cloud",
        level: "beginner",
    },

    // Tools
    {
        name: "Git & GitHub",
        category: "tools",
        level: "advanced",
    },
    {
        name: "Kafka",
        category: "tools",
        level: "intermediate",
    },
    {
        name: "Jupyter Notebook",
        category: "tools",
        level: "advanced",
    },
    {
        name: "Jira",
        category: "tools",
        level: "intermediate",
    },

    // Design
    {
        name: "Figma",
        category: "design",
        level: "intermediate",
    },
    {
        name: "UX Design",
        category: "design",
        level: "intermediate",
    },
    {
        name: "Prototyping",
        category: "design",
        level: "intermediate",
    },
];

// Helper functions
export const getSkillsByCategory = (category: Skill["category"]) => skills.filter((s) => s.category === category);

export const getBackendSkills = () => getSkillsByCategory("backend");
export const getFrontendSkills = () => getSkillsByCategory("frontend");
export const getDatabaseSkills = () => getSkillsByCategory("database");
export const getMLSkills = () => getSkillsByCategory("ml");
export const getCloudSkills = () => getSkillsByCategory("cloud");
export const getToolSkills = () => getSkillsByCategory("tools");
export const getDesignSkills = () => getSkillsByCategory("design");
