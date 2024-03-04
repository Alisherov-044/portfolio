import { Icons } from "@/components";
import type { ReactNode } from "react";

export type TSocialLink = {
    id: number;
    icon: ReactNode;
    url: string;
};

export const socialLinks: TSocialLink[] = [
    {
        id: 1,
        icon: <Icons.social.telegram className="fill-blue-700" />,
        url: "https://t.me/Sadulla_Alisherov",
    },
    {
        id: 2,
        icon: <Icons.social.github className="fill-red-800" />,
        url: "https://github.com/Alisherov-044",
    },
    {
        id: 3,
        icon: <Icons.social.twitter />,
        url: "https://twitter.com/alisherov044",
    },
    {
        id: 4,
        icon: <Icons.social.linkedin />,
        url: "https://www.linkedin.com/in/sadulla-alisherov-997908294/",
    },
];
