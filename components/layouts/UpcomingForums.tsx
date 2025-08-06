"use client";

import Link from "next/link";
import { ModuleTitle } from "../blocks/Module.Title";
import { useState } from "react";


export const UpcomingForums = () => {
    const [step, setStep] = useState(1);

    return <section className="bg-[#070a10] py-[100px]">
        <div className="w-[90%] max-w-[1290px] mx-auto">
            <ModuleTitle title="calendar" className="text-white" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[10px] mb-[20px]">
                <h2 className="text-[30px] md:text-[55px] text-white leading-[1] font-[600]">Upcoming forums</h2>
                <Link href="/" className="flex items-center gap-[5px] text-white group">
                    <span>More Events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white group-hover:translate-x-[5px] transition-transform duration-75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </Link>
            </div>

            <nav className="flex flex-col md:flex-row gap-[20px] pb-[10px] border-b border-white/70 mb-[20px]">
                <div className={`cursor-pointer ${step === 1 ? "text-orange-500" : "text-white"}`} onClick={() => setStep(1)}>Day #1 - Aug 08 2026</div>
                <div className={`cursor-pointer ${step === 2 ? "text-orange-500" : "text-white"}`} onClick={() => setStep(2)}>Day #2 - Aug 09 2026</div>
                <div className={`cursor-pointer ${step === 3 ? "text-orange-500" : "text-white"}`} onClick={() => setStep(3)}>Day #3 - Aug 10 2026</div>
            </nav>

            {step === 1 ? <div>
                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b-none md:border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div> : step === 2 ? <div>
                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b-none md:border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div> : <div>
                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>10:00-12:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">am</span>
                    </div>

                    <span className="text-[18px] font-[600]">Women in business conference</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ashton Porter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_50px] gap-[10px] md:gap-[50px] border-b-none md:border-b border-white/20 py-[20px]">
                    <div className="text-[18px] font-[600]">
                        <span>12:00-14:00</span> <br /> <span className="font-[400] text-[16px] text-white/50">pm</span>
                    </div>

                    <span className="text-[18px] font-[600]">Business growth strategies summit</span>

                    <div className="text-[18px] font-[600]">
                        <span>Ben Carter</span> <br /> <span className="font-[400] text-[16px] text-white/50">Speaker</span>
                    </div>

                    <div className="text-[18px] font-[600]">
                        <span>New york</span> <br /> <span className="font-[400] text-[16px] text-white/50">Manhattan Club</span>
                    </div>

                    <div className="w-full flex justify-start md:justify-end">
                        <div className="w-[40px] h-[40px] rounded-full border border-white/20 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    </section>
}