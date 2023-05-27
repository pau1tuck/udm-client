"use client";
import { GridView } from "@/components/grid/GridView";
import { TrackRowLg } from "@/components/list/lg/TrackRowLg";
import { getTrackData } from "@/utils/get-track-data";
import { GlobalStateContext, ViewMode } from "@/utils/global-state-context";
import { useContext } from "react";

export default function Page() {
    const { viewMode } = useContext(GlobalStateContext) || {};
    const trackData = getTrackData();

    if (!viewMode) {
        return null;
    }
    const trackComponent = trackData.map((track, index) => {
        return viewMode === ViewMode.GRID ? (
            <GridView key={index} track={track} index={index} />
        ) : (
            <TrackRowLg key={index} track={track} index={index} />
        );
    });

    return viewMode === ViewMode.GRID ? (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-wrap justify-center">
                {trackComponent}
            </div>
        </div>
    ) : (
        <div>{trackComponent}</div>
    );
}
