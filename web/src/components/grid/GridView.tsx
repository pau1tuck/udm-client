import { TagLine } from "@/components/header/TagLine";
import { getTrackData } from "@/utils/get-track-data";
import { TrackBox } from "./TrackBox";

export const GridView = () => {
    const tracks = getTrackData();
    const trackBox = tracks.map((track, index) => {
        return <TrackBox track={track} key={index} />;
    });
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex justify-between items-center">
                <div className="ml-[75px] lg:ml-[90px]">
                    <TagLine />
                </div>
                <div>
                    <span>X</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-5">{trackBox}</div>
        </div>
    );
};
