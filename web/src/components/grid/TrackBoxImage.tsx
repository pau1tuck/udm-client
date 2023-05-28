import { TrackImage } from "@/components/track/TrackImage";
import { ITrackData } from "@/types/track.types";

export const TrackBoxImage = ({ track }: { track: ITrackData }) => {
    return (
        <div className="w-60 h-32 mt-2 rounded-md cursor-pointer bg-black">
            <TrackImage trackId={track.trackId} width={320} height={180} />
        </div>
    );
};
