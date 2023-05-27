"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

export enum ViewMode {
    GRID = "grid",
    LIST = "list",
}

export interface GlobalState {
    viewMode: ViewMode;
    nowPlaying: boolean;
    trackId: string;
}

export interface GlobalStateAction {
    type: "TOGGLE_VIEW_MODE" | "SET_NOW_PLAYING" | "SET_TRACK_ID";
    payload?: any;
}

const initialState: GlobalState = {
    viewMode: ViewMode.GRID,
    nowPlaying: false,
    trackId: "",
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
        case "SET_NOW_PLAYING":
            return {
                ...state,
                nowPlaying: action.payload,
            };
        case "SET_TRACK_ID":
            return {
                ...state,
                trackId: action.payload,
            };
        default:
            return state;
    }
};

// * * * * * * * * * * * * * * * * * * * * * * * * *

interface GlobalStateProviderProps {
    children: ReactNode;
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    const toggleViewMode = () => {
        dispatch({ type: "TOGGLE_VIEW_MODE" });
    };

    const setNowPlaying = (value: boolean) => {
        dispatch({ type: "SET_NOW_PLAYING", payload: value });
    };

    const setTrackId = (id: string) => {
        dispatch({ type: "SET_TRACK_ID", payload: id });
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
    const context = useContext(GlobalDispatchContext);
    if (context === undefined) {
        throw new Error(
            "useGlobalDispatch must be used within a GlobalStateProvider"
        );
    }
    return context;
};
