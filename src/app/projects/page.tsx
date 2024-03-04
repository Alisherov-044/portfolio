import { projects } from "@/data";
import { ProjectCard } from "@/components";

export default function Projects() {
    return (
        <main className="container mt-10 lg:mt-20">
            <h1 className="text-2xl lg:text-5xl mb-5 lg:mb-10">All Projects</h1>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        className="w-full"
                    />
                ))}
            </ul>
        </main>
    );
}
