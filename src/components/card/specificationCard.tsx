import { formatIndex } from "@/utils";
import type { TSpecification } from "@/data/specifications";

type SpecificationCardProps = {
    specification: TSpecification;
    index: number;
};

export function SpecificationCard({
    specification,
    index,
}: SpecificationCardProps) {
    const { title, titleColor, description } = specification;

    return (
        <div className="flex flex-col gap-y-3">
            <h1 className="text-gray-text-dark text-9xl font-medium">
                {formatIndex(index)}
            </h1>
            <h2 style={{ color: titleColor }} className="text-lg font-bold">
                {title}
            </h2>
            <p className="text-secondary-text font-semibold">{description}</p>
        </div>
    );
}
