"use client";

import { AudioPlayer } from "./AudioPlayer";

type TWrapperProps = {
    children: React.ReactNode;
};

export const AudioWrapper: React.FC<TWrapperProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="grow">{children}</main>
            <footer className="fixed inset-x-0 bottom-0 flex justify-center shadow-md">
                <AudioPlayer />
            </footer>
        </div>
    );
};
