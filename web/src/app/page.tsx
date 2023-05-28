"use client";
import { GridView } from "@/components/grid/GridView";
import { TrackBox } from "@/components/grid/TrackBox";
import { ListView } from "@/components/list/ListView";
import { TrackRow } from "@/components/list/TrackRow";
import { ViewModeController } from "@/components/view/ViewModeController";
import { GlobalStateContext, ViewMode } from "@/config/global-state";
import { ITrackData } from "@/types/track.types";
import { getTrackData } from "@/utils/get-track-data";
import { useContext } from "react";

// * Main Index View *

export default function Page() {
    const { viewMode } = useContext(GlobalStateContext) || {};
    const trackData = getTrackData();

    if (!viewMode) {
        return null;
    }

    const getViewComponent = (track: ITrackData, index: number) => {
        const key = index;
        const props = { key, track, index: index + 1 };

        return viewMode === ViewMode.GRID ? (
            <TrackBox {...props} />
        ) : (
            <TrackRow {...props} />
        );
    };

    const latestTracks = trackData.map(getViewComponent);

    return (
        <>
            <ViewModeController grid={viewMode === ViewMode.GRID} />
            {viewMode === ViewMode.GRID ? (
                <GridView>{latestTracks}</GridView>
            ) : (
                <ListView>{latestTracks}</ListView>
            )}
        </>
    );
}
