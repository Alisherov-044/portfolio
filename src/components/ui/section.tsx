import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
    id?: string;
    children: ReactNode;
    title: string;
    subTitle?: string;
    description?: string;
    descriptionColor?: "light" | "dark";
    bgLight?: boolean;
    className?: string;
    actionButton?: ReactNode;
    headerContainer?: boolean;
    headerClassName?: string;
};

export function Section({
    id,
    children,
    title,
    subTitle,
    bgLight = false,
    description,
    descriptionColor = "dark",
    actionButton,
    headerContainer = false,
    headerClassName,
    className,
}: SectionProps) {
    return (
        <section id={id} className={className}>
            <div
                className={cn(
                    "flex flex-col",
                    headerContainer &&
                        "px-6 py-10 md:px-9 md:py-14 lg:px-16 lg:py-32 w-full lg:w-1/2",
                    headerClassName
                )}
            >
                {subTitle && (
                    <span className="mb-2 text-secondary-text uppercase font-bold inline-block">
                        {subTitle}
                    </span>
                )}
                <h2
                    className={cn(
                        "w-full font-bold max-w-[780px] text-white text-3xl sm:text-5xl",
                        bgLight && "text-black"
                    )}
                >
                    {title}
                </h2>
                {description && (
                    <p
                        className={cn(
                            "mt-6 max-w-[600px]",
                            descriptionColor === "dark"
                                ? "text-gray-text-dark"
                                : "text-gray-text"
                        )}
                    >
                        {description}
                    </p>
                )}
                {actionButton && actionButton}
            </div>
            {children}
        </section>
    );
}
