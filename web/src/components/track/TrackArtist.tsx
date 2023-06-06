import { ITrackData } from "@/types/track.types";

export function TrackArtist({ artist }: ITrackData) {
    return <span>{artist}</span>;
}
