"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Phone, Instagram, Linkedin, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - you can integrate with email service here
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto max-w-7xl px-6 lg:px-12">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-8 lg:grid-cols-5">
                    {/* Left - Contact Info */}
                    <Reveal delay={0.2} className="lg:col-span-2">
                        <GlassCard>
                                <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

                                <div className="space-y-4">
                                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-primary-500/10">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                                            <Mail className="h-5 w-5 text-primary-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <p className="font-medium">{personalInfo.email}</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 rounded-lg p-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                                            <Phone className="h-5 w-5 text-primary-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <p className="font-medium">{personalInfo.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-foreground/10">
                                    <h4 className="mb-4 font-semibold">Follow Me</h4>
                                    <div className="flex gap-3">
                                        <a href="https://instagram.com/abbilville" target="_blank" rel="noopener noreferrer"
                                           className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 transition-all hover:scale-110">
                                            <Instagram className="h-5 w-5" />
                                        </a>
                                        <a href="https://linkedin.com/in/abbilville" target="_blank" rel="noopener noreferrer"
                                           className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 transition-all hover:scale-110">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a href="https://medium.com/@Abbilville" target="_blank" rel="noopener noreferrer"
                                           className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 transition-all hover:scale-110">
                                            <BookOpen className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>
                    </Reveal>

                    {/* Right - Contact Form */}
                    <Reveal delay={0.3} className="lg:col-span-3">
                        <GlassCard>
                            <h3 className="mb-6 text-2xl font-bold">Send Me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full rounded-xl border border-foreground/10 bg-background/50 px-4 py-3 text-base backdrop-blur-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full rounded-xl border border-foreground/10 bg-background/50 px-4 py-3 text-base backdrop-blur-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        className="w-full rounded-xl border border-foreground/10 bg-background/50 px-4 py-3 text-base backdrop-blur-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        className="w-full resize-none rounded-xl border border-foreground/10 bg-background/50 px-4 py-3 text-base backdrop-blur-sm transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full text-base">
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </Button>
                            </form>
                        </GlassCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
