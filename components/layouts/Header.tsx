"use client";

import { useEffect, useState } from "react";
import { Logo } from "../blocks/Logo";
import { MENU } from "@/utils/nav_menu";
import { NavLink } from "../blocks/Nav.Link";
import { Button } from "../blocks/Button";
import { Cancel, Hamburger, NineDots, Search } from "../blocks/icons";
import Link from "next/link";

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    // const [screenHeight, setScreenHeight] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [_submenu, _setSubmenu] = useState<{ text: string, href: string }[]>([]);
    const [showDesktopSocials, setShowDesktopSocials] = useState(false);

    // console.log(screenHeight);



    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    const handleToggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
            setStep(1);
        } else {
            setIsMobileMenuOpen(true);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // useEffect(() => {
    //     setScreenHeight(window.innerHeight);
    // }, []);

    return (
        <>
            {/* header */}
            <header className={`fixed w-full top-0 left-0 z-50 py-[23px] transition-bg duration-[.5s] ${scrollPosition > 200 ? 'bg-[#070a10]' : 'bg-transparent'}`}>
                <div className="w-[90%] max-w-[1810px] h-full mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-[50px]">
                        <Logo />

                        <nav className="hidden md:flex items-center gap-[20px]">
                            {
                                MENU.map((item, i) => <NavLink key={i} text={item.text} href={item.href} submenu={item.submenu} />)
                            }
                        </nav>
                    </div>

                    <div className="flex items-center gap-[40px]">
                        <div className="flex items-center gap-[10px] md:gap-[20px]">
                            <Search />
                            <div className="" >
                                <div onClick={() => { setShowDesktopSocials(true) }}>
                                    <NineDots />
                                </div>
                                <div className="block md:hidden" onClick={handleToggleMobileMenu}>
                                    {isMobileMenuOpen ? <Cancel /> : <Hamburger />}
                                </div>
                            </div>
                        </div>
                        <Button text="let's talk" className="bg-orange-500 text-white uppercase text-[14px] font-[500] hidden md:block" />
                    </div>
                </div>
            </header>

            {/* mobile menu */}
            <div className={`fixed top-0 left-0 w-full h-[auto] bg-[#070a17] p-[20px] z-[10] transition-transform duration-[.3s] ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                <div className="h-[83px]"></div>
                <nav className="flex flex-col gap-[20px]">
                    {step === 1 ? <div className="text-white flex flex-col gap-[20px]">
                        {
                            MENU.map((item, i) => item.submenu ? <div key={i} className="flex items-center justify-between" onClick={() => _setSubmenu(item.submenu)}>
                                <span>{item.text}</span>
                                <span className="cursor-pointer" onClick={() => { setStep(2) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </div> : <Link key={i} href={item.href} className="flex items-center justify-between" onClick={() => setIsMobileMenuOpen(false)}>
                                <span>{item.text}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>)
                        }
                    </div> : <div className="text-white flex flex-col gap-[20px]">
                        <div className="flex items-center gap-[10px]" onClick={() => setStep(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                            <span>Back</span>
                        </div>

                        {_submenu.map((item, i) => <Link key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>{item.text}</Link>)}
                    </div>}
                </nav>
                <div className="pt-[10px] mt-[20px] border-t border-t-white/30 flex items-center gap-[5px]">
                    <a href="https://x.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[24px]" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                    </a>

                    <a href="https://facebook.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[24px]" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>
                    </a>

                    <a href="https://instagram.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white/70 w-[24px]" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                    </a>
                </div>
            </div>

            {/* desktop socials */}
            <div className={`fixed right-0 top-0 h-[100vh] w-[400px] bg-white p-[40px] z-[51] transition-transform duration-[.3s] flex flex-col justify-center ${showDesktopSocials ? "translate-x-0" : "translate-x-[100%]"}`}>
                <div className="absolute top-[40px] right-[40px] cursor-pointer" onClick={() => setShowDesktopSocials(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>

                <div className="flex flex-col gap-[20px]">
                    <a href="https://x.com" className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-[24px]" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                        <span>Twitter</span>
                    </a>

                    <a href="https://x.com" className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-[24px]" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>
                        <span>Facebook</span>
                    </a>

                    <a href="https://x.com" className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-[24px]" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </>
    )
}