import { BiCaretUp, BiTime } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdNumbers } from "react-icons/md";
import { listViewLgColumnWidths } from "./TrackRowLg";

export const TrackRowLgHeader = () => {
    return (
        <div className="max-w-1280 mx-auto mb-2">
            <div
                className="grid w-full gap-0 bg-customGray font-body font-bold text-gray-500"
                style={{ gridTemplateRows: "auto auto" }}
            >
                <div
                    className={`grid h-[72px] w-full gap-0 whitespace-nowrap ${listViewLgColumnWidths} font-base text-sm`}
                >
                    <div
                        id="index"
                        className="mr-3 inline-flex items-center justify-center"
                    >
                        <span className="inline-flex text-xl">
                            <p className="inline-flex text-xl">
                                <span className="pl-[10px] pr-[5px]">
                                    <MdNumbers />
                                </span>
                                <span className="pt-[3px] text-sm">
                                    <BiCaretUp />
                                </span>
                            </p>
                        </span>
                    </div>
                    <div
                        id="image"
                        className="inline-flex h-[72px] w-[128px] cursor-pointer items-center"
                    ></div>
                    <div
                        id="title-artist"
                        className="inline-flex items-center pl-10"
                    >
                        <div className="flex flex-col">
                            <p className="inline-flex">
                                <span className="pr-[10px]">
                                    Title
                                    <br />
                                    Artist
                                </span>
                                <span className="mt-[13px] text-sm">
                                    <BiCaretUp />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div
                        id="date"
                        className="hidden items-center lg:inline-flex"
                    >
                        <p className="inline-flex text-xl">
                            <span className="mt-[3px] pr-[5px]">
                                <HiOutlineCalendar />
                            </span>
                            <span className="mt-[2px] pt-[3px] text-sm">
                                <BiCaretUp />
                            </span>
                        </p>
                    </div>

                    <div
                        id="label"
                        className="text-md ml-[40px] hidden items-center pl-2 lg:inline-flex"
                    >
                        <p className="inline-flex">
                            <span className="pr-[5px]">Label</span>
                            <span className="pt-[3px] text-sm">
                                <BiCaretUp />
                            </span>
                        </p>
                    </div>
                    <div id="controls" className="flex items-center"></div>
                    <div className="inline-flex items-center justify-center pr-6">
                        <p className="inline-flex text-xl">
                            <span className="pl-[5px] pr-[5px]">
                                <BiTime />
                            </span>
                            <span className="[pt-3px] text-sm">
                                <BiCaretUp />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
