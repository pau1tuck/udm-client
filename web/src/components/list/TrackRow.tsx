import { ITrackData } from "@/types/track.types";
import { useTrackClickHandler } from "@/utils/use-track-click-handler";
import { TrackRowLg } from "./lg/TrackRowLg";
import { TrackRowMd } from "./md/TrackRowMd";
import { TrackRowSm } from "./sm/TrackRowSm";
import { TrackRowXs } from "./xs/TrackRowXs";

export function TrackRow({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) {
    const handleTrackClick = useTrackClickHandler();

    return (
        <div onClick={() => handleTrackClick(track)}>
            <div className="hidden lg:block xl:block 2xl:block">
                <TrackRowLg track={track} index={index} />
            </div>
            <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
                <TrackRowMd track={track} index={index} />
            </div>
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                <TrackRowSm track={track} index={index} />
            </div>
            <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                <TrackRowXs track={track} index={index} />
            </div>
        </div>
    );
}
