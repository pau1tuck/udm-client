import { ITrackDataProps } from "@/types/track.types";

export const TrackVersion = ({ version }: ITrackDataProps) => {
    return <span>({version})</span>;
};
