import Image from "next/image";

export function Hero() {
    return (
        <section className="flex flex-col md:flex-row">
            <div className="relative w-full aspect-square slide-in-from-left">
                <Image
                    fill
                    src="/hero.avif"
                    alt="hero image"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-5 px-5 py-7 bg-secondary-bg md:bg-transparent md:-translate-x-10">
                <h1 className="text-3xl font-bold slide-in-from-right">
                    I&apos;m Sadulla Alisherov. A Web developer{" "}
                    <span className="text-secondary-text">
                        based in Uzbekistan.
                    </span>
                </h1>
                <p className="leading-7 font-semibold slide-in-from-right-lazy">
                    I&apos;m the small developer with big desire and dream. My
                    wish in the future is to create my own framework that
                    everyone can use it to creaet better user interfaces
                </p>
            </div>
        </section>
    );
}
