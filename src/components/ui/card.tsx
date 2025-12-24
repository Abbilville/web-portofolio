import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    glass?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, hover = false, glass = false, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-card p-6",
                glass ? "glass backdrop-blur-glass border border-white/20 dark:border-white/10" : "bg-card text-card-foreground border border-foreground/10 shadow-card",
                hover && "hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "Card";
