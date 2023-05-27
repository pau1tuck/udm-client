import { ITrackDataProps } from "@/types/track.types";
import { TrackBox } from "./TrackBox";

export const GridView = ({
    track,
    index,
}: {
    track: ITrackDataProps;
    index: number;
}) => {
    return <TrackBox track={track} index={index} />;
};
