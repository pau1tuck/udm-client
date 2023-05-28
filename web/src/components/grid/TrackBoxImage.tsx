"use client";
import { TrackImage } from "@/components/track/TrackImage";
import { ITrackData } from "@/types/track.types";
import {
    useGlobalDispatch,
    useGlobalState,
} from "@/utils/global-state-context";

export const TrackBoxImage = ({ track }: { track: ITrackData }) => {
    const { isNowPlaying, currentTrack } = useGlobalState(); // State variables
    const dispatch = useGlobalDispatch(); // Reducer dispatch function

    const setTrack = (currentTrack: ITrackData) => {
        dispatch({ type: "SET_TRACK", payload: currentTrack });
    };

    const toggleNowPlaying = () => {
        dispatch({ type: "TOGGLE_NOW_PLAYING" });
    };

    const handleImageClick = () => {
        if (track?.trackId) {
            if (isNowPlaying) {
                if (track.trackId === currentTrack.trackId) {
                    toggleNowPlaying(); // -> TO FALSE
                } else {
                    setTrack(track); // -> TO TRUE
                }
            } else {
                setTrack(track);
                toggleNowPlaying(); // -> TO TRUE
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

    return (
        <div
            onClick={handleImageClick}
            className="w-60 h-32 mt-2 rounded-md cursor-pointer bg-black"
        >
            <TrackImage trackId={track.trackId} width={320} height={180} />
        </div>
    );
};
