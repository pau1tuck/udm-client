import { BiCaretUp, BiTime } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdNumbers } from "react-icons/md";
import { listViewLgColumnWidths } from "./TrackRowLg";

export function TrackRowLgHeader() {
    return (
        <div className="mx-auto mb-2 max-w-[1280px]">
            <div className="grid-template-rows-auto grid w-full gap-0 bg-customGray font-body text-sm font-bold text-gray-500">
                <div
                    className={`grid h-[72px] w-full gap-0 whitespace-nowrap ${listViewLgColumnWidths}`}
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
                    />
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
                        className="ml-[40px] hidden items-center pl-2 text-base lg:inline-flex"
                    >
                        <p className="inline-flex">
                            <span className="pr-[5px]">Label</span>
                            <span className="pt-[3px] text-sm">
                                <BiCaretUp />
                            </span>
                        </p>
                    </div>
                    <div id="controls" className="flex items-center" />
                    <div className="inline-flex items-center justify-center pr-6">
                        <p className="inline-flex text-xl">
                            <span className="px-[5px]">
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
}
