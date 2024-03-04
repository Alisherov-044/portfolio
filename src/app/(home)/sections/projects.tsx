import Link from "next/link";
import { projects } from "@/data";
import { Button, ProjectCard, Section } from "@/components";

export function Projects() {
    return (
        <Section
            id="projects"
            subTitle="My Projects"
            title="Projects that I've done in the past"
            className="container xl:h-[1620px] flex flex-col flex-wrap gap-x-6 gap-y-10 mt-20 lg:mt-40"
            headerClassName="w-full xl:w-1/2 mb-5"
        >
            {projects.slice(0, 4).map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    className="w-full xl:w-[calc(50%-24px)]"
                />
            ))}
            <Link href="/projects" className="w-fit mx-auto">
                <Button variant="primary-outline" className="uppercase">
                    View All Projects
                </Button>
            </Link>
        </Section>
    );
}
