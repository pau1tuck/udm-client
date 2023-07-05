import { Header } from "@/components/header/Header";
import { Navbar } from "@/components/navbar/NavBar";
import { AudioWrapper } from "@/components/player/AudioWrapper";
import { GlobalStateProvider } from "@/config/global-state";
import "@fontsource/architects-daughter/400.css";
import "@fontsource/lato/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/quicksand/400.css";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = process.env.NEXT_PUBLIC_SITE_TITLE;
const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export const metadata = {
    title,
    description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <GlobalStateProvider>
            <html lang="en">
                <body className={inter.className}>
                    <AudioWrapper>
                        <div className="bg-custom min-h-screen">
                            <nav className="hidden">
                                <Navbar />
                            </nav>
                            <div className="mx-auto max-w-screen-xl px-4">
                                <header className="">
                                    <Header />
                                </header>
                                <main className="">{children}</main>
                            </div>
                        </div>
                    </AudioWrapper>
                </body>
            </html>
        </GlobalStateProvider>
    );
}
