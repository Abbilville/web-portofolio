"use client";

import { education } from "@/data/education";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Education() {
    return (
        <section id="education" className="py-24 bg-muted/30">
            <div className="container mx-auto max-w-6xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            <span className="gradient-text">Education</span>
                        </h2>
                        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    </div>
                </Reveal>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <Reveal key={index} delay={0.1 * (index + 1)}>
                            <GlassCard>
                                <div className="flex flex-col gap-6 md:flex-row">
                                    {/* Logo placeholder */}
                                    <div className="flex-shrink-0">
                                        <div className="flex h-20 w-20 items-center justify-center">
                                            <GraduationCap className="h-10 w-10 text-primary-500 md:h-12 md:w-12" />
                                            <Image
                                                src={`/images/education/${edu.institution.toLowerCase().replace(/\s+/g, '-')}.png`}
                                                alt={edu.institution}
                                                width={96}
                                                height={96}
                                                className="rounded-xl object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                            <div>
                                                <h3 className="mb-1 text-2xl font-bold md:text-3xl">{edu.institution}</h3>
                                                <p className="text-lg font-medium text-primary-600 dark:text-primary-400 md:text-xl">
                                                    {edu.degree}
                                                </p>
                                            </div>
                                            {edu.gpa && (
                                                <div className="flex items-center gap-2 rounded-xl bg-primary-500/10 px-4 py-2">
                                                    <Award className="h-5 w-5 text-primary-500" />
                                                    <span className="text-lg font-bold text-primary-500">
                                                        GPA: {edu.gpa}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4 flex flex-wrap gap-4 text-base text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {edu.startDate} - {edu.endDate ? edu.endDate : edu.current ? "Present" : ""}
                                                </span>
                                            </div>
                                            {edu.location && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{edu.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {edu.coursework && edu.coursework.length > 0 && (
                                            <div>
                                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                                    Relevant Coursework
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, i) => (
                                                        <Badge key={i} variant="orange" className="text-sm">
                                                            {course}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {edu.transcriptUrl && (
                                            <div className="mt-4">
                                                <a
                                                    href={edu.transcriptUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    View Transcript
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
