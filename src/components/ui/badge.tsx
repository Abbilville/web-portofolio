import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "secondary" | "outline" | "blue" | "green" | "purple" | "orange" | "pink" | "red";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-2xl px-2 py-1 text-xs transition-all border",
                {
                    "bg-muted/80 text-foreground border-foreground/20": variant === "default",
                    "bg-primary-500/15 text-primary-600 dark:text-primary-400 border-primary-500/30 hover:border-primary-500/50": variant === "primary",
                    "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-foreground border-blue-500/30 hover:border-blue-500/50": variant === "secondary",
                    "border-foreground/30 bg-background/50 text-foreground hover:bg-foreground/5": variant === "outline",
                    "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30 hover:border-blue-500/50": variant === "blue",
                    "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30 hover:border-green-500/50": variant === "green",
                    "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30 hover:border-purple-500/50": variant === "purple",
                    "bg-orange-500/15 text-orange-900 dark:text-orange-400 border-orange-500/30 hover:border-orange-500/50": variant === "orange",
                    "bg-pink-500/15 text-pink-700 dark:text-pink-400 border-pink-500/30 hover:border-pink-500/50": variant === "pink",
                    "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30 hover:border-red-500/50": variant === "red",
                },
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
