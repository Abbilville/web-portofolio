"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import {
    getBackendSkills,
    getFrontendSkills,
    getDatabaseSkills,
    getMLSkills,
    getCloudSkills,
    getToolSkills,
} from "@/data/skills";
import { Code2, Database, Cloud, Wrench, Brain, Globe } from "lucide-react";

export function Skills() {
    const skillCategories = [
        {
            title: "Backend Development",
            skills: getBackendSkills(),
            icon: Code2,
            color: "from-blue-500 to-cyan-500",
            description: "Building robust server-side applications and APIs"
        },
        {
            title: "Frontend Development",
            skills: getFrontendSkills(),
            icon: Globe,
            color: "from-purple-500 to-pink-500",
            description: "Creating responsive and interactive user interfaces"
        },
        {
            title: "Database Systems",
            skills: getDatabaseSkills(),
            icon: Database,
            color: "from-green-500 to-emerald-500",
            description: "Designing and optimizing data storage solutions"
        },
        {
            title: "Machine Learning & AI",
            skills: getMLSkills(),
            icon: Brain,
            color: "from-orange-500 to-red-500",
            description: "Developing intelligent systems and ML models"
        },
        {
            title: "Cloud & DevOps",
            skills: getCloudSkills(),
            icon: Cloud,
            color: "from-indigo-500 to-blue-500",
            description: "Deploying and scaling applications in the cloud"
        },
        {
            title: "Developer Tools",
            skills: getToolSkills(),
            icon: Wrench,
            color: "from-yellow-500 to-amber-500",
            description: "Utilizing modern development and collaboration tools"
        },
    ];

    return (
        <section id="skills" className="py-24">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            Tech <span className="gradient-text">Stack</span>
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Technologies and tools I work with to bring ideas to life
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return category.skills.length > 0 ? (
                            <Reveal key={category.title} delay={0.05 * (categoryIndex + 1)}>
                                <GlassCard className="group h-full transition-all duration-300 hover:shadow-2xl">
                                    <div className="mb-6 flex items-start gap-4">
                                        <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className={`mb-2 text-xl font-bold transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent`}>
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge
                                                key={skill.name}
                                                variant="orange"
                                                className="text-sm transition-all duration-200 hover:scale-105"
                                            >
                                                {skill.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </GlassCard>
                            </Reveal>
                        ) : null;
                    })}
                </div>
            </div>
        </section>
    );
}
