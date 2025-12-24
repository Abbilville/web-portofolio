"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useEmblaCarousel from "embla-carousel-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturedProjects } from "@/data/projects";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Users, User } from "lucide-react";

export function ProjectsPreview() {
    const featuredProjects = getFeaturedProjects();
    const { theme } = useTheme();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        dragFree: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const [selectedIndex] = useEmblaCarouselSelected(emblaApi);

    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Selected projects showcasing my technical expertise
                        </p>
                    </div>
                </Reveal>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Blur edges */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background via-background/80 to-transparent"></div>

                    {/* Embla Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {featuredProjects.map((project) => (
                                <div
                                    key={project.slug}
                                    className="min-w-0 flex-[0_0_100%] px-4"
                                >
                                    <Reveal delay={0}>
                                        <GlassCard className="mx-auto max-w-4xl">
                                            <div className="grid gap-6 md:grid-cols-2">
                                                {/* Project Image */}
                                                <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                                                    <div className="flex h-full w-full items-center justify-center">
                                                        <span className="text-6xl font-bold opacity-20 gradient-text">
                                                            {project.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Project Info */}
                                                <div className="flex flex-col">
                                                    <div className="mb-4">
                                                        <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                                                        <p className="text-base text-muted-foreground leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    {/* Team Size */}
                                                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                                                        {project.teamSize === "Solo" ? (
                                                            <>
                                                                <User className="h-4 w-4" />
                                                                <span>Solo Project</span>
                                                            </>
                                                        ) : project.teamSize ? (
                                                            <>
                                                                <Users className="h-4 w-4" />
                                                                <span>{project.teamSize}</span>
                                                            </>
                                                        ) : null}
                                                    </div>

                                                    {/* Tech Stack */}
                                                    <div className="mb-4">
                                                        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                                            Tech Stack
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.map((tag) => (
                                                                <Badge key={tag} variant="orange" className="text-sm">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Links */}
                                                    <div className="mt-auto flex gap-3">
                                                        {project.githubUrl && (
                                                            <a
                                                                href={project.githubUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium transition-all hover:bg-muted/80"
                                                            >
                                                                <Github className="h-4 w-4" />
                                                                View Code
                                                            </a>
                                                        )}
                                                        {project.liveUrl && (
                                                            <a
                                                                href={project.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg"
                                                            >
                                                                <ExternalLink className="h-4 w-4" />
                                                                Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Reveal>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button
                            onClick={scrollPrev}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 transition-all hover:scale-110 hover:shadow-lg"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {featuredProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${
                                        index === selectedIndex
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-110"
                                            : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500"
                                    }`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={scrollNext}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 transition-all hover:scale-110 hover:shadow-lg"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function useEmblaCarouselSelected(emblaApi: ReturnType<typeof useEmblaCarousel>[1]) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return [selectedIndex, setSelectedIndex] as const;
}

