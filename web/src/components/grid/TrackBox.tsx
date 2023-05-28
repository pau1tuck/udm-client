import { ITrackData } from "@/types/track.types";
import { handleTrackClick } from "@/utils/handle-track-click";
import { TrackBoxData } from "./TrackBoxData";
import { TrackBoxImage } from "./TrackBoxImage";

export const TrackBox = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    return (
        <div className="animate__bounceIn">
            <div
                onClick={() => handleTrackClick(track)}
                className="flex flex-col w-64 h-72 m-1 mr-3 mb-10 ml-3 justify-start items-center rounded-md bg-customGray"
            >
                <TrackBoxImage track={track} />
                <TrackBoxData track={track} index={index} />
            </div>
        </div>
    );
};
