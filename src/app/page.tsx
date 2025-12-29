import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Project } from "@/src/components/sections/project";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Project />
            <Contact />
        </>
    );
}

