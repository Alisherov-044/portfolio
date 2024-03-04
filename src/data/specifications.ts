export type TSpecification = {
    id: number;
    title: string;
    titleColor: string;
    description: string;
};

export const specifications: TSpecification[] = [
    {
        id: 1,
        title: "UI",
        titleColor: "green",
        description:
            "Mastering backend, I found a passion for UI. Now, with Next.js and React.js, I craft digital experiences. Join me in shaping tomorrow's landscapes with code.",
    },
    {
        id: 2,
        title: "API",
        titleColor: "blue",
        description:
            "With Prisma and Django, I wield the power to forge APIs. Embark with me on a journey to sculpt digital connections with grace and precision.",
    },
    {
        id: 3,
        title: "Animations",
        titleColor: "red",
        description:
            "I breathe life into websites with GSAP or Framer Motion, crafting mesmerizing animations",
    },
];
