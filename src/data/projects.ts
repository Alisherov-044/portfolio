export type TProject = {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
};

export const projects: TProject[] = [
    {
        id: 1,
        title: "Code with mosh - Online course website",
        description:
            "I made clone existing website on google which is codewithmosh.com. I use Next js and Prisma to create this fullstack website",
        url: "https://codewithmosh-com.vercel.app",
        image: "/projects/project-1.avif",
    },
    {
        id: 2,
        title: "Nike - Nike's official website's clone",
        description:
            "This is clone of Nike company's website for Canada. And coded with next js new app router",
        url: "https://nike-nextjs.vercel.app",
        image: "/projects/project-2.avif",
    },
    {
        id: 3,
        title: "Appx Group - portfolio website",
        description:
            "Portfolio of IT company called Appx Group, which i currently working on. Made by latest and greatest technologies.",
        url: "https://appx.group",
        image: "/projects/project-3.avif",
    },
    {
        id: 4,
        title: "Headwind forever - Tailwind ui",
        description:
            "Dummy website build with tailwindcss and tailwind ui library.",
        url: "https://headwind-forever.vercel.app",
        image: "/projects/project-4.avif",
    },
    {
        id: 5,
        title: "Darital Oil - shopify in darital",
        description:
            "Website about popular oil market in darital. Well designed and developed.",
        url: "https://darital-oil.vercel.app",
        image: "/projects/project-5.avif",
    },
    {
        id: 6,
        title: "Imi market - Grocery website",
        description:
            "With React js and redux toolkit i created this grocery website. It's demo site with only frontend",
        url: "https://imi-market.vercel.app",
        image: "/projects/project-6.avif",
    },
    {
        id: 7,
        title: "Florist - Flower shopify",
        description:
            "This is a simple Florist shopify website to buy mostly Flowers and Gifts written with next js v14.0 and has full functionality & map",
        url: "https://florist-nextjs.vercel.app",
        image: "/projects/project-7.avif",
    },
    {
        id: 8,
        title: "Taskify - No1 Task Managment",
        description:
            "Taskify - (home) landing page clone with tailwindcss and next js 14 app router",
        url: "https://taskify-nextjs14.vercel.app",
        image: "/projects/project-8.avif",
    },
    {
        id: 9,
        title: "Eureka Talent",
        description: "Eureka Talent (portfolio) landing page about company",
        url: "https://eureka-talent.vercel.app",
        image: "/projects/project-9.avif",
    },
];
