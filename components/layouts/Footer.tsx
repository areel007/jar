import { Logo } from "../blocks/Logo"

export const Footer = () => {
    return <footer className="w-full bg-[#070a10] pt-[100px] text-white">
        <div className="w-[90%] max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px] xl:gap-[100px] mb-[20px]">
            <Logo />

            <h2 className="text-[22px] md:text-[45px] leading-[1] font-[600] mb-[20px]">Bringing together industry leaders in our forum</h2>
        </div>

        <div className="w-[90%] max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] xl:gap-[100px] border-b border-white/20 pb-[40px] md:pb-[100px]">
            <div className="">
                <span className="text-[16px] md:text-[20px] font-[600] block mb-[20px]">Newsletter Signup</span>

                <div className="flex items-center justify-between py-[10px] border-b border-white/20 mb-[10px]">
                    <div className="flex items-center gap-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        <input type="text" placeholder="Enter your email address" className="outline-none w-full" />
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>

                <div className="flex items-center gap-[10px]">
                    <input type="checkbox" />
                    <p className="text-white/40">I agree to the <a href="" className="text-white underline">Privacy Policy</a></p>
                </div>
            </div>

            <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                <div className="">
                    <span className="text-[16px] md:text-[18px] font-[600] block mb-[20px]">Socials</span>

                    <div className="flex flex-col gap-[10px] text-white/50">
                        <a href="" target="_blank">Twitter</a>
                        <a href="" target="_blank">Facebook</a>
                        <a href="" target="_blank">Instagram</a>
                    </div>
                </div>

                <div className="">
                    <span className="text-[16px] md:text-[18px] font-[600] block mb-[20px]">Menu</span>

                    <div className="flex flex-col gap-[10px] text-white/50">
                        <a href="" target="_blank">Home</a>
                        <a href="" target="_blank">About Us</a>
                        <a href="" target="_blank">Blog</a>
                        <a href="" target="_blank">Events</a>
                        <a href="" target="_blank">Shop</a>
                        <a href="" target="_blank">Contact Us</a>
                    </div>
                </div>

                <div className="">
                    <span className="text-[16px] md:text-[18px] font-[600] block mb-[20px]">Socials</span>

                    <div className="flex flex-col gap-[10px] text-white/50">
                        <span>info@example.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[90%] max-w-[1290px] mx-auto py-[40px]">
            <p><strong>Jar 2025</strong> &copy; 2025. All rights reserved.</p>
        </div>
    </footer>
}