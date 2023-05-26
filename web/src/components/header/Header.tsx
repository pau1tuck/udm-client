import { Logo } from "@/components/header/Logo";
import { Title } from "@/components/header/Title";

export const Header: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[-20px] md:mt-[-45px] mb-20 pr-3">
            <Logo />
            <Title />
        </div>
    );
};
