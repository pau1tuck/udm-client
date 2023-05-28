import { Logo } from "@/components/header/Logo";
import { Title } from "@/components/header/Title";

export const Header = () => {
    return (
        <div className="mb-[50px] mt-[-20px] flex flex-col items-center justify-center pr-3 md:mt-[-45px]">
            <Logo />
            <Title />
        </div>
    );
};
