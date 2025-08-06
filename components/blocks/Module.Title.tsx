type Props = {
    title: string;
    className?: string;
}

export const ModuleTitle = ({ title, className }: Props) => {
    return <span className={`text-[14px] md:text-[16px] uppercase block mb-[20px] ${className}`}>{title}</span>
}