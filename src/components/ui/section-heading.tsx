import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12", align === "center" && "text-center", className)}>
            <h2 className="text-h2 mb-3">{title}</h2>
            {subtitle && <p className="text-body-lg mx-auto max-w-2xl text-neutral-600">{subtitle}</p>}
        </div>
    );
}
