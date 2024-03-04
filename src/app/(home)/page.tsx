import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Github } from "./sections/github";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { Skillset } from "./sections/skillset";
import { Specifications } from "./sections/specifications";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <Specifications />
            <About />
            <Skillset />
            <Projects />
            <Github />
            <Contact />
        </main>
    );
}
