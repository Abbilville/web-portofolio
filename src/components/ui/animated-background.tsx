"use client";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div
                className="absolute bottom-2/4 right-2/4 w-[300px] h-[300px] bg-blue-500/25 dark:bg-blue-500/15 rounded-full blur-3xl animate-float-primary"
            />

            <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/25 dark:bg-purple-500/20 rounded-full blur-3xl animate-float-secondary"
            />
        </div>
    );
}
