import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.summary,
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    keywords: [
        "Backend Engineer",
        "Software Engineer",
        "Java",
        "Python",
        "Spring Boot",
        "Django",
        "Machine Learning",
        "Full Stack Developer",
        "Portfolio",
        "Computer Science",
        "Universitas Indonesia"
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        title: `${personalInfo.name} | ${personalInfo.role}`,
        description: personalInfo.tagline,
        siteName: personalInfo.name,
    },
    twitter: {
        card: "summary_large_image",
        title: `${personalInfo.name} | ${personalInfo.role}`,
        description: personalInfo.tagline,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
