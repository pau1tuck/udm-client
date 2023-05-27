import { TrackArtist } from "@/components/track/TrackArtist";
import { TrackLabel } from "@/components/track/TrackLabel";
import { TrackTitle } from "@/components/track/TrackTitle";
import { TrackVersion } from "@/components/track/TrackVersion";
import { ITrackData } from "@/types/track.types";

export const TrackBoxData = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    return (
        <div className="mt-5 font-cursive text-center text-white">
            <div className="mt-2 rounded-md">
                <TrackTitle title={track.title} />
            </div>
            {track.version && (
                <div className="mt-2 rounded-md text-tertiary">
                    <TrackVersion version={track.version} />
                </div>
            )}
            <div className="mt-2 rounded-md text-secondary">
                <TrackArtist artist={track.artist} />
            </div>
            <div className="mt-2 rounded-md text-primary">
                <TrackLabel label={track.label} />
            </div>
        </div>
    );
};
