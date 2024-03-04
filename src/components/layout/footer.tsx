import Link from "next/link";
import { Icons } from "@/components";
import { navLinks, socialLinks } from "@/data";

export function Footer() {
    return (
        <footer className="bg-secondary-bg py-10 mt-10 lg:py-20">
            <div className="container flex flex-col gap-y-7 items-center sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center gap-y-3 sm:items-start">
                    <Icons.logo className="w-32" />
                    <ul className="flex items-center gap-x-3">
                        {socialLinks.map(({ id, icon, url }) => (
                            <li key={id}>
                                <Link href={url} target="_blank">
                                    {icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="relative flex gap-4 justify-center flex-wrap">
                    {navLinks.map(({ id, title, url }) => (
                        <li
                            key={id}
                            className="w-1/3 text-center sm:text-start"
                        >
                            <Link href={url} className="text-secondary-text">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
