import Link from "next/link";
import type { TSkillset } from "@/data/skillsets";

type SkillsetCardProps = {
    skillset: TSkillset;
};

export function SkillsetCard({ skillset }: SkillsetCardProps) {
    const { title, url, description, Icon } = skillset;

    return (
        <Link
            href={url}
            target="_blank"
            className="group flex flex-col gap-y-3"
        >
            <Icon className="transition-all duration-300 group-hover:scale-105" />
            <h4 className="text-white text-xl font-bold">{title}</h4>
            <p className="text-secondary-text text-sm">{description}</p>
        </Link>
    );
}
