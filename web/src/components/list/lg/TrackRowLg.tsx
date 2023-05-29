import { TrackArtist } from "@/components/track/TrackArtist";
import { TrackDuration } from "@/components/track/TrackDuration";
import { TrackImage } from "@/components/track/TrackImage";
import { TrackTitle } from "@/components/track/TrackTitle";
import { TrackVersion } from "@/components/track/TrackVersion";
import { ITrackData } from "@/types/track.types";
import { getMonthShorthand } from "@/utils/get-month-shorthand";

export const listViewLgColumnWidths =
    "grid-cols-[50px,128px,1fr,75px,225px,210px,75px]";

export const TrackRowLg = ({
    track,
    index,
}: {
    track: ITrackData;
    index: number;
}) => {
    return (
        <div className="max-w-1280 mx-auto mb-2">
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
                        id="image"
                        className="inline-flex h-[72px] w-[128px] cursor-pointer items-center"
                    >
                        <TrackImage //? change to TrackRowImage (with onClick event)
                            trackId={track.trackId}
                            width={128}
                            height={72}
                        />
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
                    <div
                        id="date"
                        className="hidden items-center text-gray-800 lg:inline-flex"
                    >
                        {track.month && getMonthShorthand(track.month)}{" "}
                        {track.year}
                    </div>
                    <div
                        id="label"
                        className="text-md ml-[40px] hidden items-center pl-2 text-pink-700 lg:inline-flex"
                    >
                        {track.label}
                    </div>
                    <div id="controls" className="flex items-center">
                        "CONTROLS"
                    </div>
                    <div className="inline-flex items-center justify-center pr-6 text-gray-600">
                        <TrackDuration duration={track.duration} />
                    </div>
                </div>
            </div>
        </div>
    );
};
