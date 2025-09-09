import type { Metadata } from "next";
import "../../globals.css";

import localFont from "next/font/local";

const myFont = localFont({
    src: "../../../public/fonts/IBMPlexSans.ttf", // adjust path as needed
    weight: "400", // optional
    style: "normal", // optional
})

export const metadata: Metadata = {
    title: "JAR 2025 - Scientific Session",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${myFont.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
