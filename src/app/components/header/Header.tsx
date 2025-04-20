'use server'

import Image from "next/image";
import Logo from "../../asets/logoVector.svg";
import Sircle from "../../asets/Sircle.svg";
import Basket from '../../asets/basket.svg';
import {geistSans, inter} from "@/app/fonts";
import {getCurrentUser} from "../../../../actions/getCurrentUser";
import Link from "next/link";
export default async function Header() {

    const user = await getCurrentUser();

    return (
        <header className="w-full   pt-[60px]">
            <div className="flex  md:space-y-0 space-y-5 md:flex-row flex-col items-center justify-between w-full">
                <Link href="/">
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <Image src={Logo} alt="Logo Image" />
                        <p className={`${geistSans.variable} font-sans text-[23px] text-[#1A1A1A]`}>
                            BeeSound
                        </p>
                    </div>
                </Link>

                <nav>
                    <ul className={`${inter.variable} lg:gap-10 md:gap-3 items-center flex font-sans gap-10 flex-row text-[#1E1E1E] font-[400] text-[10px] sm:text-[16px]`}>
                      <Link href='/сollection'>
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

                <div className="flex flex-row items-center xl:gap-8 md:gap-5 gap-3">
                    <div className="flex flex-row items-center gap-4">
                        <Image src={Sircle} alt="Sircle" />
                        <Image src={Basket} alt="Basket" />
                    </div>
                    {
                      !user &&   <button className="border-[#1B234A] border-[3px] rounded-[10px] px-6 py-1">
                        <span  className={`${inter.variable} font-sans text-[16px]`}>
                            Sign in / Sign Up
                        </span>
                        </button>
                    }
                </div>
            </div>
        </header>
    );
}
