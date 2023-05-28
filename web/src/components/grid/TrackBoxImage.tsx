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

    const handleTrackClick = () => {
        if (track?.trackId) {
            if (isNowPlaying && track.trackId === currentTrack.trackId) {
                // If the clicked track is already playing, set isNowPlaying to false
                toggleNowPlaying();
            } else {
                // If the clicked track is different or no track is playing, update both track and isNowPlaying
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

    return (
        <div
            onClick={handleTrackClick}
            className="w-60 h-32 mt-2 rounded-md cursor-pointer bg-black"
        >
            <TrackImage trackId={track.trackId} width={320} height={180} />
        </div>
    );
};
