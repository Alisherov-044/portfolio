import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components";
import type { TProject } from "@/data/projects";

type ProjectCardProps = {
    project: TProject;
    className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
    const { title, url, description, image } = project;

    return (
        <Link
            href={url}
            target="_blank"
            className={cn(
                "group flex flex-col relative overflow-hidden",
                className
            )}
        >
            <Image
                src={image}
                width={500}
                height={500}
                alt={title}
                className="w-full h-[500px] group-hover:scale-105 transition-all duration-300 object-cover"
            />
            <div className="flex-auto px-4 py-5 md:px-8 md:py-10 bg-secondary-bg">
                <h2 className="text-xl font-bold text-white group-hover:text-green-primary group-hover:translate-x-4 transition-all duration-300">
                    {title}
                </h2>
                <p className="mt-4 text-secondary-text">{description}</p>
            </div>
            <div className="w-[50px] h-[50px] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center bg-blue-800 absolute bottom-0 right-0">
                <Icons.arrow.top />
            </div>
        </Link>
    );
}
