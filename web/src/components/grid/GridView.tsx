import { ITrackDataProps } from "@/types/track.types";
import { TrackBox } from "./TrackBox";

export const GridView = ({
    track,
    index,
}: {
    track: ITrackDataProps;
    index: number;
}) => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-wrap justify-center">
                <TrackBox track={track} index={index} />
            </div>
        </div>
    );
};
