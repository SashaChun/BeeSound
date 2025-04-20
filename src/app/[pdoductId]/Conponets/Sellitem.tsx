'use client';

import Image from "next/image";
import { geistSans } from "@/app/fonts";
import { FC } from "react";
import {redirect} from "next/navigation";

type SellitemType = {
    isBlackFriday?: boolean;
    name: string;
    url: string;
    price: string;
    id: string;
};


const Sellitem: FC<SellitemType> = ({ isBlackFriday = false, id, name, url, price }) => {

    const handleRedirect = () => {
        redirect(`/${id}`);
    };

    return (
        <button onClick={handleRedirect} className="transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="h-[140px] w-[120px] flex items-center justify-center bg-[#F2F5FF]">
                {url ? (
                    <Image
                        src={url.startsWith("//") ? `https:${url}` : url}
                        className="w-[300px] h-[200px] object-contain"
                        alt={name}
                        width={300}
                        height={200}
                    />
                ) : null}
            </div>

            <div>
                <p
                    className={`mt-2 ${geistSans.variable} font-sans text-[13px] font-semibold ${
                        isBlackFriday ? "text-white" : "text-[#1A1A1A]"
                    }`}
                >
                    {name}
                </p>

                <div className="flex items-center flex-row space-x-2 mt-2">
                    <div className="w-[18px] h-[18px] rounded-full bg-amber-600"></div>
                    <div className="w-[18px] h-[18px] rounded-full bg-green-400"></div>
                    <div className="w-[18px] h-[18px] rounded-full bg-red-600"></div>
                    <div className="w-[18px] h-[18px] rounded-full bg-blue-600"></div>
                </div>

                <p
                    className={`mt-2 ${geistSans.variable} font-sans text-[15px] font-semibold ${
                        isBlackFriday ? "text-white" : "text-[#1A1A1A]"
                    }`}
                >
                    {price}
                </p>
            </div>
        </button>
    );
};

export default Sellitem;
