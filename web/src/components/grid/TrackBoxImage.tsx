"use client";
import { TrackImage } from "@/components/track/TrackImage";
import { useGlobalState } from "@/config/global-state";
import { ITrackDataProps } from "@/types/track.types";

export const TrackBoxImage = ({ trackId }: ITrackDataProps) => {
    const {
        nowPlaying,
        trackId: id,
        setNowPlaying,
        setTrackId,
    } = useGlobalState();

    const handleImageClick = () => {
        if (trackId) {
            if (nowPlaying) {
                if (trackId === id) {
                    setNowPlaying(false);
                } else {
                    setTrackId(trackId);
                }
            } else {
                setTrackId(trackId);
                setNowPlaying(true);
            }
        }
        console.log("Image: ", trackId, nowPlaying, "Playing: ", id);
    };

    return (
        <div
            onClick={handleImageClick}
            className="w-60 h-32 mt-2 rounded-md cursor-pointer bg-black"
        >
            <TrackImage trackId={trackId} width={320} height={180} />
        </div>
    );
};
