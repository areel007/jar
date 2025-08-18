"use client";

import { ModuleTitle } from "@/components/blocks/Module.Title";
import { HorizontalScrollText } from "@/components/layouts/HorizontalScrollText";
import { Team } from "@/components/layouts/Team";
import { UpcomingForums } from "@/components/layouts/UpcomingForums";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { HomeHero } from "@/components/layouts/HomeHero";

export default function Home() {



  return (
    <div className="">
      {/* hero */}
      <HomeHero />

      {/* module 2 */}
      <UpcomingForums />

      {/* module 3 */}
      <section className="py-[100px] bg-white">
        <div className="w-[90%] max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-[530px_1fr] gap-[50px] lg:gap-[100px]">
          <div className="w-full">
            <Image src="/images/reform-left.png" alt="jar_smile" width={530} height={530} className="object-cover w-full h-auto" />
          </div>

          <div className="">
            <ModuleTitle title="business forum" />
            <h2 className="text-[30px] md:text-[55px] text-black/80 leading-[1] font-[600] mb-[20px]">Connecting minds, creating future</h2>

            <p className="text-[14px] md:text-[16px] leading-[1.4] text-black/50 max-w-[80%] mb-[20px] md:mb-[100px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>

            <div className="w-full">
              <Image src="/images/reform-right.png" alt="jar_smile" width={530} height={530} className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* module 4 */}
      <section className="py-[100px] bg-zinc-100">
        {/* todo: add content */}
      </section>

      {/* module 7 */}
      <Team />

      {/* module 8 */}
      <section className="pb-[100px]">
        <HorizontalScrollText />
      </section>

    </div>
  );
}
