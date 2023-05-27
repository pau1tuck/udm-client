import {
    GlobalDispatchContext,
    GlobalStateContext,
    ViewMode,
} from "@/utils/global-state-context";
import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

const YourComponent = () => {
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);

    // Handle the case where the state is undefined
    if (!state) {
        return null; //? or any fallback UI if needed
    }
    if (!dispatch) {
        return null;
    }
    // Access the viewMode value from the state
    const { viewMode } = state;

    // Define a function to toggle the viewMode
    const toggleViewMode = () => {
        dispatch({ type: "TOGGLE_VIEW_MODE" });
    };

    return (
        <div>
            <button
                onClick={toggleViewMode}
                className="cursor-pointer text-4xl text-gray-500"
            >
                {viewMode === ViewMode.GRID ? (
                    <FaList />
                ) : (
                    <TfiLayoutGrid2Alt />
                )}
            </button>
            <p>Current View Mode: {viewMode}</p>
        </div>
    );
};
