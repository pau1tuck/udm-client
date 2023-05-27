import { Logo } from "@/components/header/Logo";
import { Title } from "@/components/header/Title";
import { ViewModeButton } from "@/components/header/ViewModeButton";
import { TagLine } from "./TagLine";

export const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-[-20px] md:mt-[-45px] mb-[50px] pr-3">
                <Logo />
                <Title />
            </div>
            <div>
                <div className="flex flex-col mb-5">
                    <div className="flex justify-between items-center">
                        <div className="ml-[75px] lg:ml-[90px] font-cursive text-tertiary">
                            <TagLine />
                        </div>
                        <div className="lg:mr-[90px] text-4xl text-gray-500">
                            <ViewModeButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
