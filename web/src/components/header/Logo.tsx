import Image from "next/image";

export function Logo() {
    return (
        <div className="flex items-center">
            <Image
                src="/img/udm-logo.png"
                alt="UDM"
                width={250}
                height={250}
                className="mr-1 lg:ml-2"
            />
        </div>
    );
}
