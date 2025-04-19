import Image from "next/image";
import dots from "../../asets/dots.png";
import { geistSans } from "@/app/fonts";

const MainADS = () => {
    return (
        <section className="">
            <div className="relative mt-12 md:mt-[70px] w-full h-auto md:h-[430px] bg-[#af367b] rounded-bl-[5px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8">
 
                <div className="z-20 md:w-[50%] w-full md:max-w-[50%] text-white text-center md:text-left">
                    <h1 className={`text-[clamp(20px,5vw,35px)] font-semibold leading-tight ${geistSans.variable} font-sans`}>
                        Discover The Brand New <br className="hidden md:block" /> Headset In Market
                    </h1>
                    <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-white/90 leading-relaxed">
                        BeeSound is one of the world’s largest online shops providing over 1500 headphones for customers from over 80 countries.
                    </p>
                    <button className="mt-6 bg-white text-[#af367b] px-6 py-2 rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-semibold hover:bg-white/90 transition">
                        Buy Now
                    </button>
                </div>

                {/* Блок з картинкою і світлом */}
                <div className="relative flex items-center justify-center mt-10 md:mt-0 w-full max-w-[340px] md:w-[400px] h-[300px] sm:h-[340px] md:h-[400px] shrink-0">
                    {/* Зменшене розмиття */}
                    <div className="absolute inset-0 bg-white opacity-20 blur-lg rounded-full z-0" />
                    <div className="relative w-full h-full z-10">
                        <Image
                            src={dots}
                            alt="dots"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainADS;
