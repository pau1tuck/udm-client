import { ITrackData } from "@/types/track.types";
import { useTrackClickHandler } from "@/utils/use-track-click-handler";
import { TrackRowLg } from "./lg/TrackRowLg";
import { TrackRowMd } from "./md/TrackRowMd";
import { TrackRowSm } from "./sm/TrackRowSm";
import { TrackRowXs } from "./xs/TrackRowXs";

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
            <div className="hidden md:block">
                <TrackRowMd track={track} index={index} />
            </div>
            <div className="hidden sm:block">
                <TrackRowSm track={track} index={index} />
            </div>
            <div className="xs:block hidden">
                <TrackRowXs track={track} index={index} />
            </div>
        </>
    );
};
