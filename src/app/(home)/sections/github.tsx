import Link from "next/link";
import { Button, Section } from "@/components";

export function Github() {
    return (
        <Section
            title="My Github"
            description="Each project is made with love and care. Do check out my work on Github. Stars and feedbacks are appreciated."
            className="container-sm mt-20 lg:mt-40"
            actionButton={
                <Link
                    target="_blank"
                    className="w-fit"
                    href="https://github.com/Alisherov-044"
                >
                    <Button
                        size="flexible"
                        variant="secondary"
                        className="text-white border-gray-500 mt-10"
                    >
                        Follow me on Github
                    </Button>
                </Link>
            }
        >
            <div className="flex flex-col mt-16">
                <div className="h-10 p-2 rounded-t-xl w-full bg-primary-bg">
                    <ul className="flex items-center gap-x-2">
                        {[1, 2, 3].map((id) => (
                            <li key={id}>
                                <span className="inline-block w-3 h-3 rounded-full bg-gray-text-dark" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-[640px] overflow-hidden bg-fixed bg-[url(/github.avif)] bg-cover bg-no-repeat bg-top-left rounded-b-xl"></div>
            </div>
        </Section>
    );
}
