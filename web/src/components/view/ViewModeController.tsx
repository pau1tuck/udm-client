import { TagLine } from "../header/TagLine";
import { ViewModeButton } from "./ViewModeButton";

export const ViewModeController = (props: { grid: boolean }) => {
    const gridView = (
        <>
            <div className="flex justify-between">
                <div className="hidden font-cursive text-tertiary lg:ml-[90px] lg:flex">
                    <TagLine key={props.grid.toString()} />
                </div>
            </div>
            <div className="text-4xl text-gray-500 lg:mr-[90px]">
                <ViewModeButton />
            </div>
        </>
    );
    const listView = (
        <>
            <div className="flex justify-between">
                <div className="hidden font-cursive text-tertiary lg:ml-[15px] lg:flex">
                    <TagLine key={props.grid.toString()} />
                </div>
            </div>
            <div className="text-4xl text-gray-500 lg:mr-[25px]">
                <ViewModeButton />
            </div>
        </>
    );

    return (
        <div className="mb-5 flex flex-col">
            <div className="flex items-center justify-between">
                {props.grid ? gridView : listView}
            </div>
        </div>
    );
};
