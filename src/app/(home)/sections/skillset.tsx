import { skillsets } from "@/data";
import { Section, SkillsetCard } from "@/components";

export function Skillset() {
    return (
        <Section
            id="skillset"
            title="Skillset"
            descriptionColor="light"
            description="In the mosaic of my abilities, four gems shine most brilliantly—the skills I proudly claim as my own. They are not merely facets of my knowledge, but the cornerstone of my expertise. These skills, honed with dedication and passion, represent the pinnacle of my craft, guiding me as I navigate the vast landscape of possibility."
            className="container mt-8 md:mt-16 flex flex-col gap-y-10 lg:flex-row gap-x-5"
            headerClassName="mr-10"
        >
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-2/3 shrink-0">
                {skillsets.map((skillset) => (
                    <li key={skillset.id}>
                        <SkillsetCard skillset={skillset} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
