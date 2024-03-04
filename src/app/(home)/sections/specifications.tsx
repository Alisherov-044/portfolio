"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { specifications } from "@/data";
import { Section, SpecificationCard } from "@/components";

export function Specifications() {
    const container = useRef<HTMLUListElement | null>(null);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.from(".specification-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom-=100px",
                },
                x: "-100%",
                opacity: 0,
                duration: 0.7,
                stagger: 0.25,
            });
        },
        { scope: container }
    );

    return (
        <Section
            id="specification"
            className="container"
            subTitle="specification"
            title="Specifications I have learnt in the past."
        >
            <ul
                ref={container}
                className="grid gap-y-10 gap-x-20 grid-cols-1 lg:grid-cols-3 mt-10"
            >
                {specifications.map((specification, index) => (
                    <li className="specification-card" key={specification.id}>
                        <SpecificationCard
                            index={index}
                            specification={specification}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
