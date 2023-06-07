import { ITrackData } from "@/types/track.types";
import { useTrackClickHandler } from "@/utils/use-track-click-handler";
import { TrackBoxData } from "./TrackBoxData";
import { TrackBoxImage } from "./TrackBoxImage";

export const TrackBox: React.FC<{
    track: ITrackData;
}> = ({ track }) => {
    const handleTrackClick = useTrackClickHandler();

    return (
        <div className="animate__bounceIn">
            <div
                onClick={() => handleTrackClick(track)}
                className="m-1 mx-3 mb-10 flex h-72 w-64 cursor-pointer flex-col items-center justify-start rounded-md bg-customGray"
            >
                <TrackBoxImage trackId={track.trackId} />
                <TrackBoxData track={track} />
            </div>
        </div>
    );
};
