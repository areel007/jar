type TScrollTextProps = {
    text: string;
}

export const ScrollText = ({ text }: TScrollTextProps) => {
    return <h1 className="text-[60px] md:text-[80px] xl:text-[140px] font-[700] leading-[1]">{text}<span className="text-orange-500">&bull;</span></h1>
}