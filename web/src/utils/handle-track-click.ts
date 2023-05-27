import { ITrackData } from "@/types/track.types";
import {
    setTrack,
    toggleNowPlaying,
    useGlobalState,
} from "@/utils/global-state-context";

export const handleTrackClick = (track: ITrackData): undefined => {
    const { isNowPlaying, currentTrack } = useGlobalState();

    const handleClick = () => {
        if (track?.trackId) {
            if (isNowPlaying) {
                if (track.trackId === currentTrack.trackId) {
                    toggleNowPlaying(); // -> FALSE
                } else {
                    setTrack(track); // -> TRUE
                }
            } else {
                setTrack(track);
                toggleNowPlaying(); // -> TRUE
            }
        }
    };
    handleClick();
    console.log(
        "Image: ",
        track,
        "Playing: ",
        isNowPlaying,
        "Playing: ",
        currentTrack.trackId
    );
};
