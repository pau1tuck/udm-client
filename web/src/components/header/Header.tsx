import { Logo } from "@/components/header/Logo";
import { Title } from "@/components/header/Title";

export function Header() {
    return (
        <div className="mb-[50px] flex flex-col items-center justify-center pr-3 pt-[15px] ">
            <Logo />
            <Title />
        </div>
    );
}
