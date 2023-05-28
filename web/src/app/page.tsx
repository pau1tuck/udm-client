"use client";
import { GridView } from "@/components/grid/GridView";
import { TrackBox } from "@/components/grid/TrackBox";
import { ListView } from "@/components/list/ListView";
import { TrackRow } from "@/components/list/TrackRow";
import { ViewModeController } from "@/components/view/ViewModeController";
import { GlobalStateContext, ViewMode } from "@/config/global-state";
import { getTrackData } from "@/utils/get-track-data";
import { useContext } from "react";

// * Main Index View *
export default function Page() {
    const { viewMode } = useContext(GlobalStateContext) || {};
    const trackData = getTrackData();

    if (!viewMode) {
        return null;
    }

    if (viewMode === ViewMode.GRID) {
        const latestTracks = trackData.map((track, index) => {
            return <TrackBox key={index} track={track} index={index + 1} />;
        });
        return (
            <>
                <ViewModeController grid={viewMode === ViewMode.GRID} />
                <GridView>{latestTracks}</GridView>
            </>
        );
    }

    if (viewMode === ViewMode.LIST) {
        const latestTracks = trackData.map((track, index) => {
            return <TrackRow key={index} track={track} index={index + 1} />;
        });
        return <ListView>{latestTracks}</ListView>;
    }
}
