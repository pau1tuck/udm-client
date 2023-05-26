import { TrackArtist } from "@/components/track/TrackArtist";
import { TrackDuration } from "@/components/track/TrackDuration";
import { TrackImage } from "@/components/track/TrackImage";
import { TrackTitle } from "@/components/track/TrackTitle";
import { TrackVersion } from "@/components/track/TrackVersion";
import { ITrackDataProps } from "@/types/track.types";

const listLgColumnWidths = "grid-cols-[50px,128px,1fr,225px,210px,75px]";

const TrackRowLg = (index: number, track: ITrackDataProps) => {
    return (
        <div className="max-w-1280 mx-auto mb-2">
            <div
                className="grid gap-0 w-full font-body font-bold bg-customGray text-gray-500"
                style={{ gridTemplateRows: "auto auto" }}
            >
                <div
                    className={`grid gap-0 w-full h-[72px] whitespace-nowrap ${listLgColumnWidths}`}
                >
                    <div
                        id="index"
                        className="inline-flex mr-3 items-center justify-center  text-xl"
                    >
                        {index}
                    </div>
                    <div
                        id="image"
                        className="inline-flex w-[128px] h-[72px] items-center cursor-pointer"
                    >
                        <TrackImage //? change to TrackRowImage (with onClick event)
                            trackId={track.trackId}
                            width={128}
                            height={72}
                        />
                    </div>
                    <div
                        id="title-artist"
                        className="inline-flex pl-10 items-center"
                    >
                        <div className="flex flex-col">
                            <span>
                                <TrackTitle title={track.title} />
                            </span>
                            {track.version && (
                                <span>
                                    &nbsp; &nbsp;
                                    <TrackVersion version={track.version} />
                                </span>
                            )}
                            <span className="text-secondary">
                                <TrackArtist artist={track.artist} />
                            </span>
                        </div>
                    </div>
                    <div
                        id="label"
                        className="hidden lg:inline-flex items-center pl-2 text-pink-700"
                    >
                        {track.label}
                    </div>
                    <div id="controls" className="flex items-center">
                        "CONTROLS"
                    </div>
                    <div className="inline-flex items-center justify-center pr-6 text-base color-gray-600">
                        <TrackDuration duration={track.duration} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackRowLg;
