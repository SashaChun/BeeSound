import { Geist, Geist_Mono, Inter, Work_Sans } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
});
