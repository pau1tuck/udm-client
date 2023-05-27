"use client";
import { GridView } from "@/components/grid/GridView";
import { TrackBox } from "@/components/grid/TrackBox";
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

    if (viewMode === ViewMode.GRID) {
        const latestTracks = trackData.map((track, index) => {
            return <TrackBox key={index} track={track} index={index} />;
        });
        return <GridView>{latestTracks}</GridView>;
    }

    if (viewMode === ViewMode.LIST) {
        const latestTracks = trackData.map((track, index) => {
            return <TrackRowLg key={index} track={track} index={index} />;
        });
        return <div>{latestTracks}</div>; //? return <TrackRow>{latestTracks}</TrackRow> (sorts by media size)
    }
}
