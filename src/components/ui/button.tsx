import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "default";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "rounded-button inline-flex items-center justify-center font-medium transition-all",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:outline-none",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary-500/30 shadow-lg": variant === "primary" || variant === "default",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-secondary-500/30 shadow-lg": variant === "secondary",
                        "border-2 border-foreground/20 hover:bg-accent hover:text-accent-foreground": variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "glass backdrop-blur-glass border border-white/20 hover:bg-white/20 dark:hover:bg-black/20": variant === "glass",

                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
