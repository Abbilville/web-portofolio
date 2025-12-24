import { Project } from "@/types/index";

export const projects: Project[] = [
    {
        slug: "talent-pool-rencanakan",
        title: "Talent Pool Rencanakan.id",
        description: "Digital platform connecting professionals with contractors for quick recruitment",
        longDescription:
            "Co-developed an innovative digital platform to connect professionals (Talents) with contractors for quick and efficient recruitment, serving as an online professional profile and job matching system. Built with a five-person team using Agile Scrum methodologies.",
        image: "/images/projects/rencanakan.png",
        tags: ["Spring Boot", "Java", "React", "TypeScript", "Vite", "Vue.js"],
        features: [
            "Talent profile management (CV, certifications, experience, rates)",
            "Contractor search with filters",
            "Direct WhatsApp contact integration"
        ],
        featured: true,
        category: "fullstack",
        liveUrl: "https://rencanakanid-stg.netlify.app/",
        period: "Feb 2025 - Jun 2025",
        teamSize: "Group of 6"
    },
    {
        slug: "esempeha-search-engine",
        title: "ESEMPEHA Search Engine",
        description: "Advanced information retrieval system specialized for scientific facts",
        longDescription:
            "Developed an advanced information retrieval system specialized for scientific facts, utilizing the BeIR/scifact dataset. Integrated AI-generated summaries using Mistral-7B LLM for concise overviews across multiple relevant documents.",
        image: "/images/projects/esempeha.png",
        tags: ["Django", "OpenSearch", "Sentence Transformers", "Mistral-7B LLM", "Tailwind CSS"],
        features: [
            "AI-generated summaries using Mistral-7B",
            "Automatic spelling correction and suggestions",
            "Real-time auto-completion",
            "Responsive UI with comprehensive evaluation framework"
        ],
        featured: true,
        category: "ml",
        githubUrl: "https://github.com/Abbilville/esempeha-se",
        period: "Apr 2025 - May 2025",
        teamSize: "Group of 3"
    },
    {
        slug: "cc-fraud-detection-rl",
        title: "Credit Card Fraud Detection using RL",
        description: "Machine learning system for fraud detection in adversarial environments",
        longDescription:
            "Replicated research paper for Machine & Reinforcement Learning course, focusing on credit card fraud detection. Modeled the interaction between fraudsters and detection systems as a Markov Decision Process (MDP) and simulated fraudster behavior using RL algorithms.",
        image: "/images/projects/fraud-detection.png",
        tags: ["Python", "Reinforcement Learning", "Monte Carlo", "SARSA", "Machine Learning"],
        features: [
            "Fraudster behavior simulation using RL",
            "Monte Carlo and SARSA algorithm implementation",
            "Robustness evaluation under dynamic threshold adjustments"
        ],
        featured: true,
        category: "ml",
        githubUrl: "https://github.com/Abbilville/cc-fraud-sl-rl",
        period: "Mar 2025 - May 2025",
        teamSize: "Group of 2"
    },
    {
        slug: "multilingual-nli",
        title: "Multilingual NLI with Transformers",
        description: "Natural Language Inference for Indonesian-English mixed datasets",
        longDescription:
            "Led a group deep learning project on Natural Language Inference involving Indonesian-English mixed datasets. Fine-tuned and compared three multilingual transformer models: mBERT, XLM-RoBERTa, and DeBERTa.",
        image: "/images/projects/nli.png",
        tags: ["HuggingFace Transformers", "PyTorch", "Scikit-learn", "Python"],
        features: [
            "Data preprocessing and language detection",
            "Fine-tuning of mBERT, XLM-RoBERTa, DeBERTa",
            "Efficient batch scheduling and hyperparameter tuning"
        ],
        featured: true,
        category: "ml",
        githubUrl: "https://drive.google.com/drive/u/0/folders/1PKr4KqpRAI75Jbym0w0RjgcQRjHtofES",
        period: "Mar 2025 - Jun 2025",
        teamSize: "Group of 3"
    },
    {
        slug: "knowledge-graph-recipes",
        title: "Knowledge Graph Based Recipe Search",
        description: "Web application for international food recipe search with knowledge graphs",
        longDescription:
            "Developed a web application for international food recipe search using Knowledge Graph technology. Constructed RDF-based knowledge graph with Protege for ontology creation and enriched data from Wikidata.",
        image: "/images/projects/recipes.png",
        tags: ["Protege", "RDF Graph", "Wikidata", "Django", "Python"],
        features: [
            "Knowledge Graph with RDF format",
            "Integration with Wikidata and archanaskitchen.com",
            "Complex entity relationship modeling"
        ],
        featured: true,
        category: "web",
        githubUrl: "https://drive.google.com/drive/u/0/folders/1dCGPUaGHjijG7Hj0zoOXXAc-kslvcKIp",
        period: "Oct 2024 - Dec 2024",
        teamSize: "Group of 4"
    },
    {
        slug: "sibansos-ux-design",
        title: "SiBansos — UX Design Social Welfare App",
        description: "Platform to streamline social aid distribution in Indonesia using AI and OCR",
        longDescription:
            "Designed the user interface of SiBansos, a platform to streamline social aid distribution in Indonesia. Conducted comprehensive user research and followed User-Centered Design approach. Selected as one of 20 national finalists out of 615 teams at GEMASTIK XVII in UX Design category.",
        image: "/images/projects/sibansos.png",
        tags: ["Figma", "UX Design", "UCD", "Prototyping", "Usability Testing"],
        features: [
            "User research (surveys, interviews, personas)",
            "High-fidelity prototypes in Figma",
            "SUS-based usability testing",
            "20 national finalists out of 615 teams (GEMASTIK XVII)"
        ],
        featured: true,
        category: "design",
        liveUrl: "https://ristek.link/PrototypeSiBansos",
        period: "Jan 2024 - Sep 2024",
        teamSize: "Group of 4"
    },
];

// Helper functions
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectsByCategory = (category: Project["category"]) => projects.filter((p) => p.category === category);
