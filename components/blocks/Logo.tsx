// import Image from "next/image";

import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] cursor-pointer rounded-full">
            <img src="/images/jar_logo.png" alt="logo" width={100} height={100} className="w-full" />
        </Link>
    );
};