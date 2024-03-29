import "@/styles/globals.css";
import { Sen } from "next/font/google";
import { Footer, Header, Toaster } from "@/components";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alisherov Sadulla",
    description: "My portfolio website as a nextjs developer",
    icons: {
        icon: "/favicon.avif",
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
                <Toaster duration={2000} position="bottom-right" />
            </body>
        </html>
    );
}
