import { ITrackData } from "@/types/track.types";

export const TrackVersion = ({ version }: ITrackData) => {
    return <span>({version})</span>;
};
