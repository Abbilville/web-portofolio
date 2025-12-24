"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 h-96 w-96 animate-pulse rounded-full bg-primary-500/20 blur-3xl" />
                <div className="absolute right-10 bottom-20 h-[500px] w-[500px] animate-pulse rounded-full bg-secondary-500/20 blur-3xl delay-700" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <Reveal delay={0.1}>
                            <p className="mb-3 text-lg text-muted-foreground md:text-xl">
                                Hi there! I&apos;m
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                                <span className="gradient-text">Abbil</span>
                                <span>haidar</span>{" "}
                                <span className="text-foreground">Farras Zulfikar</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                                Final year Computer Science student at Universitas Indonesia and a Backend Developer enthusiast
                                with a passion for building scalable backend systems and exploring machine learning applications.
                            </p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects">
                                    <Button size="lg" className="group text-base">
                                        View Projects
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </a>
                                <a href="/Resume_Abbilhaidar Farras Zulfikar.pdf" download>
                                    <Button size="lg" variant="outline" className="group text-base">
                                        <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                                        Resume
                                    </Button>
                                </a>
                                <a href="#contact">
                                    <Button size="lg" variant="outline" className="group text-base">
                                        <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                        Get In Touch
                                    </Button>
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.5}>
                        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
                            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10">
                                    <Image
                                        src="/images/profile/profile.jpg"
                                        alt={personalInfo.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary-500/20 blur-2xl animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary-500/20 blur-2xl animate-pulse delay-500" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
