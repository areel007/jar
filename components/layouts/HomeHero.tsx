import { ModuleTitle } from "../blocks/Module.Title"

import { A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export const HomeHero = () => {
    return (
        // before:absolute before:inset-0 before:bg-[#070a10]/30 before:z-[1]
        <section className="w-full h-[100vh] relative before:absolute before:inset-0 before:bg-[#070a10]/30 before:z-[1]">
            <div className="flex items-end pb-[100px] h-full relative z-[2]">
                <div className="w-[90%] max-w-[1810px] mx-auto text-white">
                    <ModuleTitle title="Innovative business forum" />
                    <h1 className="text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] uppercase leading-[1] font-[600] mb-[20px]">Connect <br /> inspire <br /> innovate</h1>

                    <a href="#second_module" className="flex items-center gap-[5px]">
                        <span>Scroll Down</span>
                        <svg id="second_module" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>

                    </a>
                </div>
            </div>
            <div className="absolute inset-0 z-[1]">
                <Swiper
                    // install Swiper modules
                    modules={[A11y, Autoplay, EffectFade]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <Image src="/images/jar.jpg" alt="hero" fill={true} className="object-cover w-full h-full" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src="/images/jar_man_face.jpg" alt="hero" fill={true} className="object-cover w-full h-full" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}