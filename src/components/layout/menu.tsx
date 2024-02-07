import Link from "next/link";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";

type MenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function Menu({ isOpen, onClose }: MenuProps) {
    return (
        <ul
            className={cn(
                "absolute bottom-0 z-10 w-full flex flex-col md:hidden bg-secondary-bg text-secondary-text transition-transform duration-300",
                isOpen && "translate-y-full"
            )}
        >
            {navLinks.map(({ id, title, url }) => (
                <Link
                    key={id}
                    href={url}
                    onClick={onClose}
                    className="px-6 py-8 border-b border-white/15 last-of-type:bg-blue-700 last-of-type:text-white last-of-type:border-none"
                >
                    {title}
                </Link>
            ))}
        </ul>
    );
}
