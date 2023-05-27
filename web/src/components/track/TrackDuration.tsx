import { ITrackData } from "@/types/track.types";

export const TrackDuration = ({ duration }: ITrackData) => {
    return <span>{duration}</span>;
};
