import { TrackBox } from "./TrackBox";
import { getTrackData } from "@/utils/get-track-data";

export const GridView = () => {
    const tracks = getTrackData();
    const trackBox = tracks.map((track, index) => {
        return <TrackBox track={track} key={index} />;
    });
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-wrap justify-center">{trackBox}</div>
        </div>
    );
};
