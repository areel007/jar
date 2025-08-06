"use client";

import { TEAM_MEMBERS } from "@/utils/team_members";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Team = () => {
    const [containerWidth, setContainerWidth] = useState(0);
    const [columns, setColumns] = useState(4);

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        const maxWidth = 1290;
        const containerPadding = screenWidth * 0.1; // 10% padding (5% on each side)

        console.log(containerPadding);


        let actualContainerWidth;
        let columnCount;

        if (screenWidth >= 1024) {
            // Desktop: 4 columns, max width 1290px
            actualContainerWidth = Math.min(screenWidth * 0.9, maxWidth);
            columnCount = 4;
        } else if (screenWidth >= 768) {
            // Tablet: 3 columns
            actualContainerWidth = screenWidth * 0.9;
            columnCount = 3;
        } else {
            // Mobile: 2 columns
            actualContainerWidth = screenWidth * 0.9;
            columnCount = 2;
        }

        setContainerWidth(actualContainerWidth);
        setColumns(columnCount);
    };

    useEffect(() => {
        // Set initial values
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate square size based on container width and number of columns
    const squareSize = containerWidth / columns;

    return (
        <section className="py-[100px] bg-white">
            <div
                className="w-[90%] max-w-[1290px] mx-auto grid"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`
                }}
            >
                {TEAM_MEMBERS.map((item, i) => <TeamCard key={i} squareSize={squareSize} name={item.name} position={item.position} image={item.image} twitter={item.twitter} facebook={item.facebook} instagram={item.instagram} />)}

            </div>
        </section>
    );
};

type TTeamCardProps = {
    squareSize: number;
    name: string;
    position: string;
    image: string;
    twitter: string;
    facebook: string;
    instagram: string;

}

const TeamCard = ({ squareSize, name, position, image, twitter, facebook, instagram }: TTeamCardProps) => {
    return <div
        className="w-full bg-zinc-200 cursor-pointer relative after:opacity-0 hover:after:opacity-[.6] after:absolute transition-all after:duration-[.8s] after:content-[''] after:inset-0 after:bg-black after:z-[1] group overflow-hidden"
        style={{
            height: `${squareSize}px`,
            aspectRatio: '1/1'
        }}
    >
        <Image src={`/images/${image}`} alt="team member" fill={true} className="object-cover absolute inset-0 group-hover:scale-[1.1] transition-all duration-[1s]" />
        <div className="absolute inset-0 z-[2]">
            <div className="absolute bottom-0 left-0 w-full p-[20px] text-white">
                <h3>
                    <span className="block text-[20px] md:text-[24px] font-[600]">{name}</span>
                    <span className="block text-[14px] md:text-[16px]">{position}</span>
                </h3>
            </div>
            <div className="absolute right-0 top-0 h-full p-[20px] flex flex-col gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-[1s]">
                <a href={`https://x.com/${twitter}`} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[20px]" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                </a>

                <a href={`https://facebook.com/${facebook}`} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[20px]" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>
                </a>

                <a href={`https://instagram.com/${instagram}`} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[20px]" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                </a>
            </div>
        </div>
    </div>
}