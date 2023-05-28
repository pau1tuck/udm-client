import { GlobalStateContext } from "@/utils/global-state-context";
import { useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export const AudioPlayer = () => {
    const { isNowPlaying, currentTrack } = useContext(GlobalStateContext) || {};
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        if (isNowPlaying) {
            playerRef.current?.getInternalPlayer()?.play();
        } else {
            playerRef.current?.getInternalPlayer()?.pause();
        }
    }, [isNowPlaying]);

    if (!currentTrack?.trackId) {
        return null;
    }
    return (
        <div style={{ width: "100%", height: "55px" }}>
            <ReactPlayer
                ref={playerRef}
                url={`/audio/${currentTrack.trackId}.mp3`}
                controls={true}
                width="100%"
                height="100%"
                config={{
                    file: {
                        attributes: {
                            controlsList: "nodownload",
                            onContextMenu: (e: React.SyntheticEvent) =>
                                e.preventDefault(),
                        },
                    },
                }}
            />
        </div>
    );
};
