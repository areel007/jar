import { ScrollText } from "../blocks/ScollText";

export const HorizontalScrollText = () => {
    return (
        <div className="scroll-text">
            <div className="scroll-text-slide">
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />

                {/* 2 */}
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />
                <ScrollText text="JAR" />

            </div>

            <div className="scroll-text-slide-right">
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />

                {/* 2 */}
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />
                <ScrollText text="2025" />

            </div>
        </div>
    )
};