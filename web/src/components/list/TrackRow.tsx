import { ITrackData } from "@/types/track.types";
import TrackRowLg from "./lg/TrackRowLg";

export const TrackRow = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    return (
        <>
            <div className="hidden lg:block">
                <TrackRowLg track={track} index={index} />
            </div>
            <div className="hidden md:block">
                <TrackRowLg track={track} index={index} />
            </div>
            <div className="hidden sm:block">
                <TrackRowLg track={track} index={index} />
            </div>
            <div className="hidden xs:block">
                <TrackRowLg track={track} index={index} />
            </div>
        </>
    );
};
