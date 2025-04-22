'use client';

import Image from "next/image";
import { geistSans } from "@/app/fonts";
import { FC } from "react";
import { redirect } from 'next/navigation';

type SellitemType = {
    id: string;
    isBlackFriday?: boolean;
    name: string;
    url: string;
    price: string;
    params?: any;
    color?: string[];
};

const Sellitem: FC<SellitemType> = ({ isBlackFriday = false, params, color , name, url, price, id }) => {

    const handleRedirect = () => {
        redirect(`/product/${id}`);
    };

    return (
        <button onClick={handleRedirect} className="transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="h-[250px] flex items-center justify-center bg-[#F2F5FF]">
                {url ? (
                    <Image
                        src={url.startsWith('//') ? `https:${url}` : url}
                        className="w-[300px] h-[200px] object-contain"
                        alt="product"
                        width={300}
                        height={200}
                    />
                ) : null}
            </div>

            <div>
                <p className={`mt-2 ${geistSans.variable} font-sans text-[18px] font-semibold ${isBlackFriday ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {name}
                </p>

                {color ? <div className="flex items-center flex-row space-x-2 mt-2">
                    <div className="w-[30px] h-[30px] rounded-full bg-amber-600"></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-green-400"></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-red-600"></div>
                    <div className="w-[30px] h-[30px] rounded-full bg-blue-600"></div>
                </div> : null}

                <p className={`mt-2 ${geistSans.variable} font-sans text-[18px] font-semibold ${isBlackFriday ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {price}
                </p>
            </div>
        </button>
    );
};

export default Sellitem;
