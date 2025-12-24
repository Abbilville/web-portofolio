"use client";

import { experiences } from "@/data/experience";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { ExternalLink } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-muted/30">
            <div className="container mx-auto max-w-6xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            My professional journey and key contributions
                        </p>
                    </div>
                </Reveal>

                <div className="relative">
                    {/* Center vertical timeline */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-blue-500 hidden lg:block" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <Reveal key={index} delay={0.1 * (index + 1)}>
                                    <div className={`relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center`}>
                                        <div className="absolute left-1/2 top-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 lg:block" />

                                        {isLeft ? (
                                            <>
                                                {/* Card on left */}
                                                <div className="lg:text-right">
                                                    <GlassCard className="transition-all duration-300 hover:scale-105">
                                                        <div className="lg:text-right">
                                                            <h3 className="mb-2 text-2xl font-bold">{exp.position}</h3>
                                                            <p className="mb-2 text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                                                {exp.company}
                                                            </p>
                                                        </div>

                                                        <div className="mb-4 space-y-2 lg:text-right">
                                                            {exp.description.slice(0, 2).map((desc, i) => (
                                                                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                                                                    {desc}
                                                                </p>
                                                            ))}
                                                        </div>

                                                        {exp.certificateUrl && (
                                                            <div className="lg:flex lg:justify-end">
                                                                <a
                                                                    href={exp.certificateUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500"
                                                                >
                                                                    <ExternalLink className="h-4 w-4" />
                                                                    View Certificate
                                                                </a>
                                                            </div>
                                                        )}
                                                    </GlassCard>
                                                </div>

                                                {/* Date on right */}
                                                <div className="hidden lg:block">
                                                    <div className="inline-flex rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 px-4 py-2 backdrop-blur-sm">
                                                        <span className="font-mono text-sm font-semibold">
                                                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* Date on left */}
                                                <div className="hidden lg:block lg:text-right">
                                                    <div className="inline-flex rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 px-4 py-2 backdrop-blur-sm">
                                                        <span className="font-mono text-sm font-semibold">
                                                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card on right */}
                                                <div>
                                                    <GlassCard className="transition-all duration-300 hover:scale-105">
                                                        <div>
                                                            <h3 className="mb-2 text-2xl font-bold">{exp.position}</h3>
                                                            <p className="mb-2 text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                                                {exp.company}
                                                            </p>
                                                        </div>

                                                        <div className="mb-4 space-y-2">
                                                            {exp.description.slice(0, 2).map((desc, i) => (
                                                                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                                                                    {desc}
                                                                </p>
                                                            ))}
                                                        </div>

                                                        {exp.certificateUrl && (
                                                            <a
                                                                href={exp.certificateUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-sm font-medium text-primary-500"
                                                            >
                                                                <ExternalLink className="h-4 w-4" />
                                                                View Certificate
                                                            </a>
                                                        )}
                                                    </GlassCard>
                                                </div>
                                            </>
                                        )}

                                        <div className="lg:hidden">
                                            <div className="inline-flex rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 px-3 py-1.5 backdrop-blur-sm">
                                                <span className="font-mono text-xs font-semibold">
                                                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
