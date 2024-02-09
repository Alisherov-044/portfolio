import "@/styles/globals.css";
import { Sen } from "next/font/google";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alisherov Sadulla",
    description: "My portfolio website as a nextjs developer",
    icons: {
        icon: "/favicon.png",
    },
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body className={sen.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
