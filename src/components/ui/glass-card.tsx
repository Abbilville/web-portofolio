"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    gradient?: boolean;
}

export function GlassCard({ children, className, hover = true, gradient = false }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-8 transition-all duration-300",
                hover && "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10",
                gradient && "gradient-border",
                className
            )}
        >
            {children}
        </div>
    );
}
