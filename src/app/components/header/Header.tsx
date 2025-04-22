'use server'

import Image from "next/image";
import Logo from "../../asets/logoVector.svg";
import Sircle from "../../asets/Sircle.svg";
import Basket from '../../asets/basket.svg';
import {geistSans, inter} from "@/app/fonts";
import {getCurrentUser} from "../../../../actions/getCurrentUser";
import Link from "next/link";
import Counter from "@/app/components/header/components/counter";
import {getCart} from "../../../../actions/getCart";

export default async function Header() {
    const user = await getCurrentUser();
    const count = await getCart();

    const mt = count && count.itemCount > 0 ? 'mt-5 sm:mt-0' : 'mt-0';

    console.log(count);

    return (
        <header className="w-full pt-[60px]">
            <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-5 md:space-y-0">
                {/* Logo Section */}
                <Link href="/">
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <Image src={Logo} alt="Logo Image" />
                        <p className={`${geistSans.variable} font-sans text-[23px] text-[#1A1A1A]`}>
                            BeeSound
                        </p>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav>
                    <ul className={`${inter.variable} flex flex-row items-center gap-10 text-[#1E1E1E] font-normal text-xs sm:text-base`}>
                        <Link href='/product'>
                            <li className="relative group before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
                                Our Collection
                            </li>
                        </Link>
                        <li className="relative group before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
                            New Arrivals
                        </li>
                        <li className="relative group before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full">
                            For Gamers
                        </li>
                    </ul>
                </nav>

                {/* Basket & Auth Button */}
                <div className="flex flex-row items-center gap-3 xl:gap-8 md:gap-5">
                    {/* Basket Section */}
                    <div className={`flex flex-row items-center gap-4 ${mt}`}>
                        <Image src={Sircle} alt="Sircle" />
                        <Link href="/cart">
                            <div className={`relative ${mt}`}>
                                <Counter count={count && count.itemCount} />
                                <Image src={Basket} alt="Basket" />
                            </div>
                        </Link>
                    </div>

                    {/* Auth Button */}
                    <Link href="/auth">
                        {!user && (
                            <button className="border-[#1B234A] border-[3px] rounded-[10px] px-6 py-1">
                                <span className={`${inter.variable} font-sans text-[16px]`}>
                                    Sign in / Sign Up
                                </span>
                            </button>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
