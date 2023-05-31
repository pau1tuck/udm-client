import { TrackArtist } from "@/components/track/TrackArtist";
import { TrackTitle } from "@/components/track/TrackTitle";
import { TrackVersion } from "@/components/track/TrackVersion";
import { ITrackData } from "@/types/track.types";

export const listViewLgColumnWidths = "grid-cols-[50px,1fr]";

export const TrackRowXs = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    return (
        <div className="max-w-640 mx-auto mb-2">
            <div
                className="grid w-full gap-0 bg-customGray font-body font-bold text-gray-500"
                style={{ gridTemplateRows: "auto auto" }}
            >
                <div
                    className={`grid h-[72px] w-full gap-0 whitespace-nowrap ${listViewLgColumnWidths} font-base text-sm`}
                >
                    <div
                        id="index"
                        className="mr-3 inline-flex items-center justify-center"
                    >
                        {index}
                    </div>
                    <div
                        id="title-artist"
                        className="inline-flex items-center pl-10"
                    >
                        <div className="flex flex-col">
                            <p>
                                <span className="text-white">
                                    <TrackTitle title={track.title} />
                                </span>
                                {track.version && (
                                    <span className="text-tertiary">
                                        &nbsp;
                                        <TrackVersion version={track.version} />
                                    </span>
                                )}
                            </p>
                            <span className="text-secondary">
                                <TrackArtist artist={track.artist} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
