import { TrackBoxImage } from "./TrackBoxImage";
import { TrackBoxData } from "./TrackBoxData";
import { ITrackProps } from "@/types/track.types";

export const TrackBox = ({ track }: ITrackProps) => {
    return (
        <div className="animate__bounceIn">
            <div className="flex flex-col w-64 h-72 m-1 mr-3 mb-10 ml-3 justify-start items-center rounded-md bg-customGray">
                <TrackBoxImage trackId={track.trackId} />
                <TrackBoxData track={track} />
            </div>
        </div>
    );
};
