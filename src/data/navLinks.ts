export type TNavLink = {
    id: number;
    title: string;
    url: string;
};

export const navLinks: TNavLink[] = [
    {
        id: 1,
        title: "Specification",
        url: "/#specification",
    },
    {
        id: 2,
        title: "Skillset",
        url: "/#skillset",
    },
    {
        id: 3,
        title: "Projects",
        url: "/#projects",
    },
    {
        id: 4,
        title: "Contact",
        url: "/#contact",
    },
];
