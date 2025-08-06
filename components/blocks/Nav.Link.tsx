type TNavLinkProps = {
    text: string;
    href: string;
    submenu?: { text: string, href: string }[];
}

export const NavLink = ({ text, href, submenu }: TNavLinkProps) => {
    return (
        submenu ? <div className="relative group inline-block cursor-pointer font-[500]">
            <span className="inline-block relative text-white before:absolute before:top-[110%] before:bg-white before:content-[''] before:h-[2px] before:w-0 hover:before:w-full before:transition-w before:duration-[.3s]">{text}</span>
            <div className="absolute top-[100%] invisible left-0 group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-[.3s] w-[200px] text-white pt-[40px]">
                <ul className="bg-orange-500 w-full p-[30px] flex flex-col gap-[20px] font-[300]">
                    {submenu.map((item, i) => (
                        <li key={i}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div> : <a href={href} className="relative text-white font-[500] inline-block before:absolute before:top-[110%] before:bg-white before:content-[''] before:h-[2px] before:w-0 hover:before:w-full before:transition-w before:duration-[.3s]">{text}</a>
    )
}