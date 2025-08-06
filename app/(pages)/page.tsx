import { ModuleTitle } from "@/components/blocks/Module.Title";
import { HorizontalScrollText } from "@/components/layouts/HorizontalScrollText";
import { Team } from "@/components/layouts/Team";
import { UpcomingForums } from "@/components/layouts/UpcomingForums";
import Image from "next/image";

export default function Home() {

  return (
    <div className="">
      {/* hero */}
      <section className="h-[100vh] w-full relative before:absolute before:inset-0 before:bg-[#070a10]/30 before:z-[1]">
        <Image src={"/images/jar.jpg"} alt="hero" fill={true} className="object-cover w" />
        <div className="absolute inset-0 z-[2] flex items-end pb-[100px]">
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

      </section>

      {/* module 2 */}
      <UpcomingForums />

      {/* module 3 */}
      <section className="py-[100px] bg-white">
        <div className="w-[90%] max-w-[1290px] mx-auto grid grid-cols-1 lg:grid-cols-[530px_1fr] gap-[50px] lg:gap-[100px]">
          <div className="w-full">
            <Image src="/images/jar_smile.jpg" alt="jar_smile" width={530} height={530} className="object-cover w-full h-auto" />
          </div>

          <div className="">
            <ModuleTitle title="business forum" />
            <h2 className="text-[30px] md:text-[55px] text-black/80 leading-[1] font-[600] mb-[20px]">Connecting minds, creating future</h2>

            <p className="text-[14px] md:text-[16px] leading-[1.4] text-black/50 max-w-[80%] mb-[20px] md:mb-[100px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>

            <div className="w-full">
              <Image src="/images/jar_smile_2.jpg" alt="jar_smile" width={530} height={530} className="object-cover w-full h-auto" />
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
