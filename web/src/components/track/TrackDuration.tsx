import { ITrackData } from "@/types/track.types";

export function TrackDuration({ duration }: ITrackData) {
    return <span>{duration}</span>;
}
