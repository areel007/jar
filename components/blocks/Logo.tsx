import Image from "next/image";

export const Logo = () => {
    return (
        <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] cursor-pointer rounded-full">
            <Image src="/images/jar_logo.png" alt="logo" width={100} height={100} className="w-full" />
        </div>
    );
};