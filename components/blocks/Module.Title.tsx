type Props = {
    title: string;
    className?: string;
}

export const ModuleTitle = ({ title, className }: Props) => {
    return <span className={`text-[16px] md:text-[20px] uppercase block mb-[20px] ${className}`}>{title}</span>
}