import { Icons } from "@/components";
import { IconProps } from "@/components/ui/icons";
import type { FC } from "react";

export type TSkillset = {
    id: number;
    Icon: FC<IconProps>;
    title: string;
    description: string;
    url: string;
};

export const skillsets: TSkillset[] = [
    {
        id: 1,
        Icon: Icons.skillset.nextjs,
        title: "Next js",
        description:
            "In the vast universe of web development, React.js stands as a testament to the profound impact a mere library can wield. As I embarked on my journey, React.js became my trusted companion, offering a treasure trove of built-in functionalities that effortlessly streamline the development process. While my journey began with React.js, its influence remains steadfast, particularly in crafting single-page applications where SEO considerations take a backseat. As the cornerstone of modern UI development, React.js continues to reign supreme, its popularity destined to endure through the ever-changing tides of technology.",
        url: "https://nextjs.org",
    },
    {
        id: 2,
        Icon: Icons.skillset.reactjs,
        title: "React js",
        description:
            "In my current endeavors, I find myself immersed in the brilliance of Next.js, a framework that stands as a beacon of innovation in the vast landscape of web development. Through countless demo projects, I've cultivated a profound confidence in my ability to harness its power. Moreover, Next.js unveils its true magic in the realm of full-stack applications, seamlessly integrating with Prisma. From my firsthand experience, the synergy between Prisma and Next.js is nothing short of extraordinary, paving the way for unparalleled efficiency and elegance in frontend-backend communication.",
        url: "https://react.dev",
    },
    {
        id: 3,
        Icon: Icons.skillset.gsap,
        title: "Gsap",
        description:
            "GSAP - A wildly robust JavaScript animation library built for professionals. GSAP bestows upon you the power to effortlessly breathe life into anything JavaScript can touch. With its seamless animations, GSAP delivers a symphony of silky-smooth performance, accompanied by unparalleled support. So you can immerse yourself in the joy of creation, leaving the technicalities to GSAP's capable hands.",
        url: "https://gsap.com",
    },
    {
        id: 4,
        Icon: Icons.skillset.shadcnui,
        title: "Shadcn/ui",
        description:
            "Craft your own component library: a treasure trove of exquisitely designed elements ready to enhance your applications. Accessible, customizable, and generously open-source, these components invite you to seamlessly integrate beauty and functionality into your digital creations.",
        url: "https://ui.shadcn.com",
    },
];
