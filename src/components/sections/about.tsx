"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Code2, Database, Brain, Rocket } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: Code2,
            title: "Backend Enthusiast",
            description: "Proficient in Express Node JS, Java Spring Boot, Python Django, and building robust REST APIs"
        },
        {
            icon: Database,
            title: "Data-Driven",
            description: "Experience with PostgreSQL, MongoDB, and optimizing database performance"
        },
        {
            icon: Brain,
            title: "ML Enthusiast",
            description: "Exploring NLP, Computer Vision, and Reinforcement Learning applications"
        },
        {
            icon: Rocket,
            title: "Fast Learner",
            description: "Quick to adapt to new technologies and passionate about continuous improvement"
        }
    ];

    return (
        <section id="about" className="py-24">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <GlassCard className="mx-auto max-w-4xl mb-12">
                        <p className="text-lg leading-relaxed text-foreground/90 text-center">
                            A passionate Computer Science student who enjoys building useful software and learning new technologies.
                            Experienced in backend development, machine learning, and search systems. Familiar with tools such as Python,
                            Java, JavaScript, Spring Boot, React, and Django. Interested in solving real-world problems and working on
                            meaningful projects in software engineering or data science.
                        </p>
                    </GlassCard>
                </Reveal>

                <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <Reveal key={highlight.title} delay={0.1 * (index + 3)}>
                                <GlassCard className="text-center h-full">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                                        <Icon className="h-8 w-8 text-blue-500" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">{highlight.title}</h3>
                                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                                </GlassCard>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
