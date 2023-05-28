import { TrackImage } from "@/components/track/TrackImage";
import { ITrackData } from "@/types/track.types";

export const TrackBoxImage = ({ trackId }: ITrackData) => {
    return (
        <div className="mt-2 h-32 w-60 cursor-pointer rounded-md bg-black">
            <TrackImage trackId={trackId} width={320} height={180} />
        </div>
    );
};
