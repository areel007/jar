"use client";

import { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string | Date;
    title?: string;
    onComplete?: () => void;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({
    targetDate,
    title = "Countdown",
    onComplete
}: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isComplete, setIsComplete] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    useEffect(() => {
        // Set client flag to prevent hydration mismatch
        setIsClient(true);

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            // Check if countdown is complete
            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 &&
                newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                if (!isComplete) {
                    setIsComplete(true);
                    onComplete?.();
                }
            }
        }, 1000);

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [targetDate, isComplete, onComplete]);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-3 md:p-6 shadow-2xl border border-gray-700 min-w-[100px] transform hover:scale-105 transition-all duration-300">
            <div className="relative">
                <div className="text-xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 font-mono">
                    {value.toString().padStart(2, '0')}
                </div>
                <div className="absolute inset-0 text-xl md:text-5xl font-bold text-blue-500 opacity-20 blur-sm">
                    {value.toString().padStart(2, '0')}
                </div>
            </div>
            <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-semibold">
                {label}
            </div>
        </div>
    );

    // Don't render date details until client is ready to prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="flex flex-col items-center justify-center p-3 md:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl shadow-2xl border border-gray-600">

                <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center">
                    <TimeUnit value={0} label="Days" />

                    <TimeUnit value={0} label="Hours" />

                    <TimeUnit value={0} label="Minutes" />

                    <TimeUnit value={0} label="Seconds" />
                </div>
                <div className="w-full max-w-md mt-8">
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-0"></div>
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-2">Loading...</p>
                </div>
            </div>
        );
    }

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-900 to-emerald-800 rounded-3xl shadow-2xl border border-green-600">
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4 animate-pulse">
                    🎉 Time&apos;s Up! 🎉
                </div>
                <p className="text-xl md:text-2xl text-green-200 text-center">{title} has ended!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl shadow-2xl  border-gray-600">

            {/* Countdown Display */}
            <div className="flex flex-wrap gap-2 md:gap-6 justify-center items-center">
                <TimeUnit value={timeLeft.days} label="Days" />

                <TimeUnit value={timeLeft.hours} label="Hours" />

                <TimeUnit value={timeLeft.minutes} label="Minutes" />

                <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mt-8">
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{
                            width: `${Math.max(0, Math.min(100, (timeLeft.seconds / 60) * 100))}%`
                        }}
                    ></div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-2">
                    {new Date(targetDate).toISOString().split('T')[0]} at {new Date(targetDate).toTimeString().split(' ')[0]}
                </p>
            </div>
        </div>
    );
}

// Example usage component
export function CountdownExample() {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const handleCountdownComplete = () => {
        console.log("Countdown completed!");
        // You can add any logic here when countdown finishes
    };

    return (
        <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
            <Countdown
                targetDate={targetDate}
                title="🚀 Product Launch"
                onComplete={handleCountdownComplete}
            />
        </div>
    );
}