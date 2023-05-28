import { ITrackData } from "@/types/track.types";
import { useTrackClickHandler } from "@/utils/use-track-click-handler";
import { TrackBoxData } from "./TrackBoxData";
import { TrackBoxImage } from "./TrackBoxImage";

export const TrackBox = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    const handleTrackClick = useTrackClickHandler();

    return (
        <div className="animate__bounceIn">
            <div
                onClick={() => handleTrackClick(track)}
                className="m-1 mb-10 ml-3 mr-3 flex h-72 w-64 cursor-pointer flex-col items-center justify-start rounded-md bg-customGray"
            >
                <TrackBoxImage track={track} />
                <TrackBoxData track={track} index={index} />
            </div>
        </div>
    );
};
