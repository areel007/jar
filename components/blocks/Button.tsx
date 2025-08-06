"use client"; // 👈 This is required for interactive components

type TButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
};

export const Button = ({ text, className, onClick }: TButtonProps) => {
    const baseClasses = "px-[40px] py-[18px] cursor-pointer";

    return (
        <button
            type="button"
            className={`${baseClasses} ${className}`}
            onClick={() => onClick && onClick()}
        >
            {text}
        </button>
    );
};
