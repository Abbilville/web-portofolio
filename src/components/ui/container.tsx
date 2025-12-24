import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}

export function Container({ className, size = "md", children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "px-container mx-auto w-full",
                {
                    "max-w-4xl": size === "sm",
                    "max-w-6xl": size === "md",
                    "max-w-7xl": size === "lg",
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
