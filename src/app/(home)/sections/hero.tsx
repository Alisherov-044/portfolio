import Image from "next/image";

export function Hero() {
    const images = [
        {
            src: "/hero/bg-xs.avif",
            media: "(max-width: 320px)",
        },
        {
            src: "/hero/bg-sm.avif",
            media: "(min-width: 321x) and (max-width: 540px)",
        },
        {
            src: "/hero/bg-md.avif",
            media: "(min-width: 541px) and (max-width: 767px)",
        },
        {
            src: "/hero/bg-lg.avif",
            media: "(min-width: 768px) and (max-width: 1280px)",
        },
        {
            src: "/hero/bg-xl.avif",
            media: "(min-width: 1281px)",
        },
    ];

    return (
        <section className="flex flex-col mt-5 md:flex-row md:items-center overflow-hidden lg:mt-10 xl:mt-16">
            <div className="relative w-full shrink-0 md:w-1/2 aspect-video slide-in-from-left">
                <picture>
                    {images.map((image) => (
                        <source
                            key={image.src}
                            srcSet={image.src}
                            media={image.media}
                        />
                    ))}
                    <Image
                        fill
                        src="/hero/bg-xl.avif"
                        alt="hero image"
                        className="object-cover"
                    />
                </picture>
            </div>
            <div className="flex flex-col gap-y-5 px-5 py-7 bg-secondary-bg md:bg-transparent md:-translate-x-10">
                <h1 className="text-3xl font-bold slide-in-from-right lg:text-4xl xl:text-6xl xl:leading-tight">
                    I&apos;m Sadulla Alisherov. A Web developer{" "}
                    <span className="text-secondary-text">
                        based in Uzbekistan.
                    </span>
                </h1>
                <p className="leading-7 font-semibold slide-in-from-right-lazy lg:text-lg xl:text-xl xl:leading-7">
                    I&apos;m the small developer with big desire and dream. My
                    wish in the future is to create my own framework that
                    everyone can use it to create better user interfaces
                </p>
            </div>
            <div className="hidden md:block bg-secondary-bg w-2/3 h-[500px] lg:h-[600px] xl:h-[700px] min-[1570px]:h-[800px] min-[1730px]:h-[900px] absolute top-0 right-0 -translate-y-20 -z-10"></div>
        </section>
    );
}
