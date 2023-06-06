import { GlobalStateContext } from "@/config/global-state";
import { useContext, useRef } from "react";
import ReactPlayer from "react-player";

export function AudioPlayer() {
    const { isNowPlaying, currentTrack } = useContext(GlobalStateContext) || {};
    const playerRef = useRef<ReactPlayer | null>(null);

    if (!currentTrack?.trackId) {
        return null;
    }
    return (
        <div style={{ width: "100%", height: "40px" }}>
            <ReactPlayer
                ref={playerRef}
                url={`/audio/${currentTrack.trackId}.mp3`}
                playing={isNowPlaying}
                controls
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
}
