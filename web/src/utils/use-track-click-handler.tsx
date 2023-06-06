"use client";

import { useGlobalDispatch, useGlobalState } from "@/config/global-state";
import { ITrackData } from "@/types/track.types";

export const useTrackClickHandler = () => {
    const { isNowPlaying, currentTrack } = useGlobalState(); // State variables
    const dispatch = useGlobalDispatch(); // Reducer dispatch function

    const setTrack = (track: ITrackData) => {
        dispatch({ type: "SET_TRACK", payload: track });
    };

    const toggleNowPlaying = () => {
        dispatch({ type: "TOGGLE_NOW_PLAYING" });
    };

    return (track: ITrackData) => {
        if (track?.trackId) {
            if (isNowPlaying && track.trackId === currentTrack.trackId) {
                toggleNowPlaying();
            } else {
                setTrack(track);
                if (!isNowPlaying) {
                    toggleNowPlaying();
                }
            }
        }
        console.log(
            "Current: ",
            currentTrack,
            "IsPlaying?",
            isNowPlaying,
            "New track: ",
            track
        );
    };
};
