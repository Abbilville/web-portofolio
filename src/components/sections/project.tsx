"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturedProjects } from "@/data/projects";
import { ExternalLink, ChevronLeft, ChevronRight, Users, User } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function Project() {
    const featuredProjects = getFeaturedProjects();
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeTab, setActiveTab] = useState<Record<number, string>>({});

    return (
        <section id="projects" className="py-24 bg-muted/30 overflow-x-hidden">
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
                <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
                    {/* Navigation Buttons - Positioned at sides */}
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-lg hover:from-blue-500/30 hover:to-purple-600/30"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-lg hover:from-blue-500/30 hover:to-purple-600/30"
                        aria-label="Next project"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="!overflow-visible"
                    >
                        {featuredProjects.map((project, index) => {
                            const hasImages = project.images && project.images.length > 0;
                            const hasSlides = project.slidesUrl;
                            const hasPdf = project.pdfUrl;

                            const tabs: string[] = [];
                            if (hasSlides) tabs.push('slides');
                            if (hasImages) tabs.push('images');
                            if (hasPdf) tabs.push('pdf');

                            if (!activeTab[index] && tabs.length > 0) {
                                setActiveTab(prev => ({ ...prev, [index]: tabs[0] }));
                            }

                            const currentTab = activeTab[index] || tabs[0] || 'default';

                            return (
                            <SwiperSlide
                                key={project.slug}
                                className="!w-[85%] md:!w-[75%] lg:!w-[65%] max-w-xl"
                            >
                                {({ isActive }) => (
                                    <Reveal delay={0}>
                                        <GlassCard
                                            className={`transition-all duration-500 ${
                                                isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-95 opacity-40 blur-xs grayscale"
                                            }`}
                                        >
                                            {tabs.length > 1 && (
                                                <div className="flex gap-2 mb-3 border-b border-foreground/10 pb-2">
                                                    {hasSlides && (
                                                        <button
                                                            onClick={() => setActiveTab(prev => ({ ...prev, [index]: 'slides' }))}
                                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                                                currentTab === 'slides'
                                                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                                    : 'bg-muted hover:bg-muted/80'
                                                            }`}
                                                        >
                                                            Slides
                                                        </button>
                                                    )}
                                                    {hasImages && (
                                                        <button
                                                            onClick={() => setActiveTab(prev => ({ ...prev, [index]: 'images' }))}
                                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                                                currentTab === 'images'
                                                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                                    : 'bg-muted hover:bg-muted/80'
                                                            }`}
                                                        >
                                                            Images
                                                        </button>
                                                    )}
                                                    {hasPdf && (
                                                        <button
                                                            onClick={() => setActiveTab(prev => ({ ...prev, [index]: 'pdf' }))}
                                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                                                currentTab === 'pdf'
                                                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                                    : 'bg-muted hover:bg-muted/80'
                                                            }`}
                                                        >
                                                            PDF
                                                        </button>
                                                    )}
                                                </div>
                                            )}

                                            <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 mb-4">
                                                {currentTab === 'slides' && project.slidesUrl ? (
                                                    <>
                                                        <iframe
                                                            src={project.slidesUrl}
                                                            className="absolute inset-0 h-full w-full"
                                                            allowFullScreen
                                                            title={`${project.title} slides`}
                                                        />
                                                        <a
                                                            href={
                                                                project.slidesUrl.includes('canva.com')
                                                                    ? project.slidesUrl.replace(/\/view\?embed.*/, '/view')
                                                                    : project.slidesUrl.replace('/embed', '/view')
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-black/80"
                                                        >
                                                            <ExternalLink className="h-3 w-3" />
                                                            {project.slidesUrl.includes('canva.com') ? 'Open Canva' : 'Open Slides'}
                                                        </a>
                                                    </>
                                                ) : currentTab === 'pdf' && project.pdfUrl ? (
                                                    <>
                                                        <iframe
                                                            src={project.pdfUrl}
                                                            className="absolute inset-0 h-full w-full"
                                                            title={`${project.title} PDF`}
                                                        />
                                                        {project.pdfUrl.includes('drive.google.com') && (
                                                            <a
                                                                href={project.pdfUrl.replace('/preview', '/view')}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-black/80"
                                                            >
                                                                <ExternalLink className="h-3 w-3" />
                                                                Open PDF
                                                            </a>
                                                        )}
                                                    </>
                                                ) : currentTab === 'images' && project.images && project.images.length > 0 ? (
                                                    project.images.length > 1 ? (
                                                        <Swiper
                                                            modules={[Navigation, Pagination]}
                                                            navigation
                                                            pagination={{ clickable: true }}
                                                            spaceBetween={10}
                                                            slidesPerView={1}
                                                            className="project-images-gallery h-full w-full"
                                                        >
                                                            {project.images.map((img, imgIndex) => {
                                                                const isVideo = img.match(/\.(mp4|webm|mov)$/i);
                                                                return (
                                                                    <SwiperSlide key={imgIndex}>
                                                                        <div className="relative h-full w-full flex items-center justify-center">
                                                                            {isVideo ? (
                                                                                <video
                                                                                    src={img}
                                                                                    className="h-full w-full object-contain"
                                                                                    autoPlay
                                                                                    loop
                                                                                    muted
                                                                                    playsInline
                                                                                />
                                                                            ) : (
                                                                                <Image
                                                                                    src={img}
                                                                                    alt={`${project.title} - ${imgIndex + 1}`}
                                                                                    fill
                                                                                    className="object-cover"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    </SwiperSlide>
                                                                );
                                                            })}
                                                        </Swiper>
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center">
                                                            {project.images[0].match(/\.(mp4|webm|mov)$/i) ? (
                                                                <video
                                                                    src={project.images[0]}
                                                                    className="h-full w-full object-contain"
                                                                    autoPlay
                                                                    loop
                                                                    muted
                                                                    playsInline
                                                                />
                                                            ) : (
                                                                <Image
                                                                    src={project.images[0]}
                                                                    alt={project.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            )}
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center">
                                                        <span className="text-8xl font-bold opacity-20 gradient-text">
                                                            {project.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Project Info - More compact */}
                                            <div className="flex flex-col">
                                                <div className="mb-3">
                                                    <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                {/* Team Size */}
                                                {(project.teamSize === "Solo" || project.teamSize) && (
                                                    <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                                                        {project.teamSize === "Solo" ? (
                                                            <>
                                                                <User className="h-3 w-3" />
                                                                <span>Solo Project</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Users className="h-3 w-3" />
                                                                <span>{project.teamSize}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Tech Stack */}
                                                <div className="mb-3">
                                                    <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                        Tech Stack
                                                    </h4>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.tags.slice(0, 6).map((tag) => (
                                                            <Badge key={tag} variant="orange" className="text-xs px-2 py-0.5">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Links */}
                                                <div className="flex gap-2">
                                                    {project.githubUrl && (
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium transition-all hover:bg-muted/80"
                                                        >
                                                            <SiGithub className="h-3 w-3" />
                                                            Code
                                                        </a>
                                                    )}
                                                    {project.liveUrl && (
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 text-xs font-medium text-white transition-all hover:shadow-lg"
                                                        >
                                                            <ExternalLink className="h-3 w-3" />
                                                            Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Reveal>
                                )}
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Dots Indicator - Below carousel */}
                    <div className="mt-6 flex justify-center gap-2">
                        {featuredProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => swiperInstance?.slideToLoop(index)}
                                className={`h-2 w-2 rounded-full transition-all duration-500 ease-out ${
                                    index === activeIndex
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125 w-8"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

