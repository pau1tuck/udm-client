"use client";
import React, { createContext, useContext, useState } from "react";

interface GlobalStateContextProps {
    nowPlaying: boolean;
    setNowPlaying: (value: boolean) => void;
    trackId: string;
    setTrackId: (value: string) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps>({
    nowPlaying: false,
    setNowPlaying: () => {},
    trackId: "",
    setTrackId: () => {},
});

const GlobalStateUpdateContext = createContext<() => void>(() => {});

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const useGlobalStateContext = () => {
    return useContext(GlobalStateUpdateContext);
};

export const GlobalStateProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [nowPlaying, setNowPlaying] = useState<boolean>(false);
    const [trackId, setTrackId] = useState<string>("");

    return (
        <GlobalStateContext.Provider
            value={{ nowPlaying, setNowPlaying, trackId, setTrackId }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};
