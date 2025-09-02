"use client";
import Countdown from "@/components/blocks/Countdown";
import { ModuleTitle } from "@/components/blocks/Module.Title";
import { ScientificSessionHero } from "@/components/layouts/ScientificSessionHero";
import { HorizontalScrollText } from "@/components/layouts/HorizontalScrollText";
import { Button } from "@/components/blocks/Button";

export default function ScientificSession() {
    return (
        <div>
            {/* hero section */}
            <ScientificSessionHero />

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

            {/* about us  */}
            <section className="relative">
                <div className="w-full h-full hidden md:grid grid-cols-[1fr_2fr] absolute">
                    <div className="bg-blue-500 h-full"></div>
                    <div className="w-full bg-black"></div>
                </div>
                <div className="relative py-[40px] md:py-[100px] max-w-[1810px] w-[90%] mx-auto hidden md:grid grid-cols-2 gap-[100px]">
                    <div className="grid grid-cols-2 gap-[20px]">
                        <img src="/images/ABSTRACT.png" alt="jar" />
                        <img src="/images/EXHIBITION.png" alt="jar" />
                    </div>
                    <div className="">
                        <span className="text-white uppercase text-[14px] font-[700] mb-[20px] inline-block">About us</span>
                        <h2 className="text-[30px] md:text-[50px] leading-[1.1] font-[700] mb-[40px] text-white">Driving progress in educational forums</h2>
                        <p className="text-zinc-200 leading-[1.8]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

                        <ul className="text-zinc-200 my-[30px] list-decimal leading-[1.6] ml-[20px]">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Adipiscing elit tempor</li>
                            <li>Ut enim ad minim </li>
                        </ul>

                        <Button text="about us" className="bg-blue-500 text-white uppercase" />
                    </div>
                </div>

                <div className="block md:hidden">
                    <div className="p-[20px] bg-blue-500 grid grid-cols-2 gap-[20px]">
                        <img src="/images/ABSTRACT.png" alt="jar" />
                        <img src="/images/EXHIBITION.png" alt="jar" />
                    </div>

                    <div className="p-[40px_20px] bg-black">
                        <span className="text-white uppercase text-[14px] font-[700] mb-[20px] inline-block">About us</span>
                        <h2 className="text-[30px] leading-[1.1] font-[700] mb-[20px] text-white">Driving progress in educational forums</h2>
                        <p className="text-zinc-200 leading-[1.8]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

                        <ul className="text-zinc-200 my-[20px] list-decimal leading-[1.6] ml-[20px]">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Adipiscing elit tempor</li>
                            <li>Ut enim ad minim </li>
                        </ul>

                        <Button text="about us" className="bg-blue-500 text-white uppercase" />
                    </div>
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