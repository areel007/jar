import { A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Button } from '../blocks/Button';

export const ScientificSessionHero = () => {
    const handleApply = () => {
        const href = "https://form.veridianarc.com/callforabstracts";
        window.location.href = "https://form.veridianarc.com/callforabstract"

    }


    return (
        <section className="h-full md:h-[85vh] w-screen relative">
            <div className="w-full h-full hidden md:grid grid-cols-1 md:grid-cols-2 absolute">
                <div className="w-full h-full bg-black">

                </div>

                <div className="w-full h-full relative flex items-center">
                    <div className="absolute inset-0">
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
                                <img src="/images/1.png" alt="hero" className="object-cover w-full h-full" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="/images/2.png" alt="hero" className="object-cover w-full h-full" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="/images/3.png" alt="hero" className="object-cover w-full h-full" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="w-[90%] max-w-[1810px] h-full mx-auto hidden md:grid grid-cols-2 relative">
                <div className="w-full h-full flex flex-col justify-end items-start pb-[70px]">
                    <h1 className="text-[64px] 2xl:text-[98px] leading-[1.1] font-[600] mb-[40px] text-white">Bringing Evidence <br /> and Research <br /> to Light</h1>

                    <Button text='Submit Abstract' className='bg-orange-500 text-white' onClick={handleApply} />
                </div>


            </div>

            <div className="block md:hidden w-full h-auto relative bg-black p-[0_10px_10px_10px]">
                <div className="w-full h-auto pt-[96px]">
                    {/* <div className="h-[96px]" aria-hidden="true"></div> */}
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
                            <img src="/images/1.png" alt="hero" className="object-cover w-full h-[500px]" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/2.png" alt="hero" className="object-cover w-full h-[500px]" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/3.png" alt="hero" className="object-cover w-full h-[500px]" />
                        </SwiperSlide>

                    </Swiper>

                    <div className="w-full p-[20px_5px]">
                        <h1 className="text-[34px] leading-[1.1] font-[600] mb-[20px] text-white">Bringing Evidence and Research to Light</h1>

                        <Button text='Submit Abstract' className='bg-orange-500 text-white w-full' onClick={handleApply} />
                    </div>
                </div>


            </div>
        </section>
    )
}