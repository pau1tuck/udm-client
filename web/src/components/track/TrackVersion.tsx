import { ITrackData } from "@/types/track.types";

export function TrackVersion({ version }: ITrackData) {
    return <span>({version})</span>;
}
