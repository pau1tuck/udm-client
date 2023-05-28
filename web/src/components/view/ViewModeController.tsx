import { TagLine } from "../header/TagLine";
import { ViewModeButton } from "./ViewModeButton";

export const ViewModeController = (props: { grid: boolean }) => {
    const gridView = (
        <>
            <div className="flex justify-between">
                <div className="hidden font-cursive text-tertiary lg:ml-[90px] lg:flex">
                    <TagLine />
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
                <div className="ml-[15px] hidden font-cursive text-tertiary lg:flex">
                    <TagLine />
                </div>
            </div>
            <div className="text-4xl text-gray-500">
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
