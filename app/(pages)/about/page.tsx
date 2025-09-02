"use client";
import Countdown from "@/components/blocks/Countdown";
import { ModuleTitle } from "@/components/blocks/Module.Title";
import { AboutHero } from "@/components/layouts/AboutHero";
import { HorizontalScrollText } from "@/components/layouts/HorizontalScrollText";

export default function About() {
    return (
        <div>
            {/* hero section */}
            <AboutHero />

            {/*  */}
            <section className="w-full py-[40px] md:py-[100px]">
                <div className="w-[90%] max-w-[1290px] mx-auto">
                    <ModuleTitle title="lorem ipsum" className="text-black font-[700] text-[20px] md:text-[30px] mb-[20px]" />
                    <p className="text-[14px] md:text-[16px] leading-[1.6] max-w-[950px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque, laudantium hic rerum cupiditate nobis quibusdam veniam minus ab expedita consequuntur! Accusamus quas eveniet soluta iure aliquid repellat porro expedita perspiciatis. Quo libero nostrum veritatis aliquam ab alias vitae? Necessitatibus rem, illo fugiat ab consequuntur voluptates tempore facilis eius fugit.</p>

                    <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:gap-[40px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[100px]">
                            <div className="">
                                <h2 className="text-[24px] md:text-[42px] font-[700] leading-[1.1]">Annual education conference 2025</h2>
                                <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-[20px] md:gap-[100px]">
                                <div className="flex flex-col items-center gap-[10px]">
                                    <img src="/icons/DASHBOARD.svg" alt="jar" className="w-[100px]" />
                                    <span className="block font-[600] text-[16px] md:text-[20px]">Dashboard</span>
                                </div>

                                <div className="flex flex-col items-center gap-[10px]">
                                    <img src="/icons/COMMUNITY.svg" alt="jar" className="w-[100px]" />
                                    <span className="block font-[600] text-[16px] md:text-[20px]">Community</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[100px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <img src="/icons/DIGITAL.svg" alt="jar" className="w-[100px]" />
                                <span className="block font-[600] text-[16px] md:text-[20px] text-center">Digital</span>
                            </div>

                            <div className="flex flex-col items-center gap-[10px]">
                                <img src="/icons/EMERGENCY.svg" alt="jar" className="w-[100px]" />
                                <span className="block font-[600] text-[16px] md:text-[20px] text-center">Emergency</span>
                            </div>

                            <div className="flex flex-col items-center gap-[10px]">
                                <img src="/icons/FINANCE.svg" alt="jar" className="w-[100px]" />
                                <span className="block font-[600] text-[16px] md:text-[20px] text-center">Finance</span>
                            </div>

                            <div className="flex flex-col items-center gap-[10px]">
                                <img src="/icons/HRH.svg" alt="jar" className="w-[100px]" />
                                <span className="block font-[600] text-[16px] md:text-[20px] text-center">HRH</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[40px] md:mt-[100px]">
                    <HorizontalScrollText />
                </div>
            </section>

            {/* countdown */}
            <section className="w-full py-[40px] md:py-[100px] bg-gray-800">
                <div className="max-w-[900px] w-[90%] mx-auto">
                    <p className="text-center uppercase text-white">Join Us</p>
                    <p className="font-[700] text-white text-center text-[24px] md:text-[50px] leading-[1.1] mb-[20px] md:mb-[40px]">Our conference starts in</p>

                    <Countdown targetDate={new Date('2025-12-25')} title="Countdown" />
                </div>
            </section>
        </div>
    );
}