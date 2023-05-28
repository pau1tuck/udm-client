"use client";
import { ITrackData } from "@/types/track.types";
import { ReactNode, createContext, useContext, useReducer } from "react";

export enum ViewMode {
    GRID = "grid",
    LIST = "list",
}

export interface GlobalState {
    viewMode: ViewMode;
    sortBy?: string[]; // ? ADD ME IN HERE!
    sortAscending?: boolean;
    isNowPlaying: boolean;
    currentTrack: ITrackData;
}

export interface GlobalStateAction {
    type: "TOGGLE_VIEW_MODE" | "TOGGLE_NOW_PLAYING" | "SET_TRACK";
    payload?: any;
}

const initialState: GlobalState = {
    viewMode: ViewMode.GRID,
    isNowPlaying: false,
    currentTrack: {},
};

export const GlobalStateContext = createContext<GlobalState | undefined>(
    undefined
);
export const GlobalDispatchContext = createContext<
    React.Dispatch<GlobalStateAction> | undefined
>(undefined);

// * * * * * * * * * * * * * * * * * * * * * * * *

const globalStateReducer = (
    state: GlobalState,
    action: GlobalStateAction
): GlobalState => {
    switch (action.type) {
        case "TOGGLE_VIEW_MODE":
            return {
                ...state,
                viewMode:
                    state.viewMode === ViewMode.GRID
                        ? ViewMode.LIST
                        : ViewMode.GRID,
            };
        case "TOGGLE_NOW_PLAYING":
            return {
                ...state,
                isNowPlaying: !state.isNowPlaying,
            };
        case "SET_TRACK":
            return {
                ...state,
                currentTrack: action.payload,
            };
        default:
            return state;
    }
};

// * * * * * * * * * * * * * * * * * * * * * * * * *

interface GlobalStateProviderProps {
    children: ReactNode;
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    const toggleViewMode = () => {
        dispatch({ type: "TOGGLE_VIEW_MODE" });
    };

    const toggleNowPlaying = () => {
        dispatch({ type: "TOGGLE_NOW_PLAYING" });
    };

    const setTrack = (currentTrack: ITrackData) => {
        dispatch({ type: "SET_TRACK", payload: currentTrack });
    };

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = (): GlobalState => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error(
            "useGlobalState must be used within a GlobalStateProvider"
        );
    }
    return context;
};

export const useGlobalDispatch = (): React.Dispatch<GlobalStateAction> => {
    const dispatch = useContext(GlobalDispatchContext);

    if (!dispatch) {
        throw new Error(
            "useGlobalDispatch must be used within a GlobalStateProvider"
        );
    }

    return dispatch;
};

export const setTrack = (currentTrack: ITrackData) => {
    const dispatch = useGlobalDispatch();
    dispatch({ type: "SET_TRACK", payload: currentTrack });
};

export const toggleNowPlaying = () => {
    const dispatch = useGlobalDispatch();
    dispatch({ type: "TOGGLE_NOW_PLAYING" });
};

export default GlobalStateProvider;
