"use client"

import { ReactNode, createContext, useContext, useReducer, Dispatch } from "react";
import { ITrackData } from "@/types/track.types";

export enum ViewMode {
  GRID = "grid",
  LIST = "list",
}

export interface GlobalState {
  viewMode: ViewMode;
  sortBy?: string[];
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

export const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
export const GlobalDispatchContext = createContext<Dispatch<GlobalStateAction> | undefined>(undefined);

const globalStateReducer = (state: GlobalState, action: GlobalStateAction): GlobalState => {
  switch (action.type) {
    case "TOGGLE_VIEW_MODE":
      return {
        ...state,
        viewMode: state.viewMode === ViewMode.GRID ? ViewMode.LIST : ViewMode.GRID,
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

interface GlobalStateProviderProps {
  children: ReactNode;
}

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState(): GlobalState {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}

export function useGlobalDispatch(): Dispatch<GlobalStateAction> {
  const dispatch = useContext(GlobalDispatchContext);
  if (!dispatch) {
    throw new Error("useGlobalDispatch must be used within a GlobalStateProvider");
  }
  return dispatch;
}
