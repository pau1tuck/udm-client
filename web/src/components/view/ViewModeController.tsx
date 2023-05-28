import { TagLine } from "../header/TagLine";
import { ViewModeButton } from "../header/ViewModeButton";

export const ViewModeController = (props: { grid: boolean }) => {
    return (
        <div className="mb-5 flex flex-col">
            <div className="flex items-center justify-between">
                <div className="ml-[75px] font-cursive text-tertiary lg:ml-[90px]">
                    <TagLine />
                </div>
                <div className="text-4xl text-gray-500 lg:mr-[90px]">
                    <ViewModeButton />
                </div>
            </div>
        </div>
    );
};
