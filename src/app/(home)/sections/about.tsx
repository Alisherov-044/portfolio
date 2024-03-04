import Link from "next/link";
import Image from "next/image";
import { Button, Section } from "@/components";

export function About() {
    return (
        <Section
            bgLight
            headerContainer
            title="Philosophy & values"
            description="Greetings, I am Sadulla Alisherov, a web developer honed by the esteemed halls of the Data Learning Center. My expertise spans the realms of both Frontend and Backend development, where I wield the artistry to sculpt seamless user experiences. Armed with a mastery of crafting APIs and seamlessly integrating them into the Frontend, I embark on a journey to weave digital landscapes that captivate and inspire. Join me as we navigate the ever-evolving frontier of web development, where innovation knows no bounds and possibilities are endless."
            className="flex flex-col bg-smoke lg:flex-row mt-10 lg:mt-20"
            actionButton={
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    download="/resume.pdf"
                    className="mt-6 w-fit"
                >
                    <Button
                        size="flexible"
                        variant="secondary"
                        className="text-black border-black"
                    >
                        More about me
                    </Button>
                </Link>
            }
        >
            <div className="relative w-full lg:w-1/2 lg:shrink-0 aspect-video">
                <Image
                    fill
                    src="/about.avif"
                    alt="about image"
                    className="object-cover"
                />
            </div>
        </Section>
    );
}
