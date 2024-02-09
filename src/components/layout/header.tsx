"use client";
import Link from "next/link";
import { Icons, Menu } from "@/components";
import { navLinks } from "@/data";
import { useMenu } from "@/hooks";

export function Header() {
    const { isOpen, close, toggle } = useMenu();

    return (
        <header className="relative">
            <nav className="container relative z-20 md:bg-transparent flex items-center justify-between bg-background px-4 py-6 md:py-0">
                <Link href="/">
                    <Icons.logo className="h-5" />
                </Link>
                <ul className="hidden md:flex">
                    {navLinks.map(({ id, title, url }) => (
                        <Link
                            key={id}
                            href={url}
                            className="px-6 py-8 transition-all duration-300 text-secondary-text hover:text-green-primary last-of-type:bg-blue-700 last-of-type:hover:bg-blue-900 last-of-type:hover:text-white last-of-type:text-white"
                        >
                            {title}
                        </Link>
                    ))}
                </ul>
                <button className="p-1 md:hidden" onClick={toggle}>
                    <Icons.burger />
                </button>
            </nav>
            <Menu isOpen={isOpen} onClose={close} />
        </header>
    );
}
