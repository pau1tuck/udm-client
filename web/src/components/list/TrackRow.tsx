import { ITrackData } from "@/types/track.types";
import { useTrackClickHandler } from "@/utils/use-track-click-handler";
import { TrackRowLg } from "./lg/TrackRowLg";

export const TrackRow = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    const handleTrackClick = useTrackClickHandler();
    return (
        <>
            <div
                onClick={() => handleTrackClick(track)}
                className="hidden cursor-pointer lg:block"
            >
                <TrackRowLg track={track} index={index} />
            </div>
            <div className="hidden md:block"></div>
            <div className="hidden sm:block"></div>
            <div className="xs:block hidden"></div>
        </>
    );
};
